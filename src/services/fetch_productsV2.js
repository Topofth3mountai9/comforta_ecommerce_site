// import { results_on_the_screen } from '../constants';
// import { all_products } from '../data';
import { all_products } from '../data';
import { initDB, STORE_NAMES, storeIndividualProducts, storeImage } from './db';

// Store data in IndexedDB with timestamp
async function cacheProducts(products) {
  const db = await initDB();
  const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readwrite');
  const store = transaction.objectStore(STORE_NAMES.PRODUCTS);

  await store.clear();
  await store.add({
    id: 'all_products',
    timestamp: Date.now(),
    data: products,
  });

  console.log('Products cached successfully');
}

// Get cached data from IndexedDB
async function getCachedProducts() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readonly');
    const store = transaction.objectStore(STORE_NAMES.PRODUCTS);
    // const request = store.get('all_products'); // Retrieve by fixed key
    const request = store.getAll(); // Retrieve by fixed key

    // request.onsuccess = () => {
    //   resolve(request.result ? [request.result] : null);
    // };

    request.onsuccess = () => {
      const products = request.result;
      resolve(products.length ? products : null);
    };
    request.onerror = () => reject(request.error);
  });
}

// Main fetch function
export async function fetch_products({ url }) {
  console.log(url);
  console.log(all_products);
  // return {
  //   products: all_products,
  //   count: all_products.length,
  // };
  let wanted = {
    products: all_products,
    count: all_products.length,
  };
  console.log(wanted);
  try {
    // Check for cached data first
    const cachedData = await getCachedProducts();
    console.log(cachedData);
    if (cachedData) {
      const [obj_from_db] = cachedData;
      const filtered_data = obj_from_db.data || [];
      console.log(filtered_data);

      return {
        products: filtered_data,
        count: filtered_data.length,
      };
    }

    // If no cache, fetch from API
    const response = await fetch(url);
    const products = await response.json();
    // console.log(products);

    // Store the products in cache and IndexedDB
    await Promise.allSettled([
      cacheProducts(products),
      storeIndividualProducts(products),
      ...products.map((product) => storeImage(product.image)),
    ]);

    // return { products, count: products.length };
  } catch (error) {
    console.log('Error fetching products:', error);
    // console.error('Error fetching products:', error);

    // Fallback to cached data if available
    const cachedData = await getCachedProducts();
    if (cachedData) {
      const [obj_from_db] = cachedData;
      return {
        products: obj_from_db.data || [],
        count: (obj_from_db.data || []).length,
      };
    }

    return {
      products: all_products,
      count: all_products.length,
    };
    throw error; // Rethrow the error if no cache and fetch fails
  }
}

// Clear cache function
export async function clearProductsCache() {
  const db = await initDB();
  const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readwrite');
  const store = transaction.objectStore(STORE_NAMES.PRODUCTS);
  await store.clear();
  console.log('Products cache cleared');
}
