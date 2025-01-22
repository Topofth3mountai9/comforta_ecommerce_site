import { results_on_the_screen } from '../constants';
import { all_products } from '../data';
import { initDB, STORE_NAMES, storeIndividualProducts, storeImage } from './db';

// Store data in IndexedDB with timestamp
async function cacheProducts(products) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readwrite');
    const store = transaction.objectStore(STORE_NAMES.PRODUCTS);

    // Clear existing data
    store.clear();

    // Add new data with id as keyPath
    store.add({
      id: 'all_products', // Fixed ID for the full products list
      timestamp: Date.now(),
      data: products,
    });

    transaction.oncomplete = () => {
      console.log('Products cached successfully');
      resolve();
    };
    transaction.onerror = () => reject(transaction.error);
  });
}

// Get cached data from IndexedDB
async function getCachedProducts() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readonly');
    const store = transaction.objectStore(STORE_NAMES.PRODUCTS);
    const request = store.getAll();

    request.onsuccess = () => {
      const products = request.result;
      resolve(products.length ? products : null);
    };
    request.onerror = () => reject(request.error);
  });
}

// Main fetch function
export async function fetch_products({ url }) {
  // console.log(filters);

  // return {
  //   products: all_products,
  //   count: all_products.length,
  // };
  // let wanted_page_results;
  // const { page, limit } = filters;
  try {
    // Check for cached data first
    const cachedData = await getCachedProducts();
    if (cachedData) {
      console.log(cachedData);
      const [obj_from_db] = cachedData;
      // const cached_data = obj_from_db.data;
      let filtered_data = obj_from_db.data;
      console.log(filtered_data);
      // console.log(cached_data);

      //applying filters
      //in our case its only pagination

      // if (page) {

      //   const start = (page - 1) * limit;
      //   const end = start + limit;
      //   console.log(start, end);
      //   const paginated_data = filtered_data.slice(start, end);
      //   console.log(paginated_data);
      //   return {
      //     products: paginated_data,
      //     // count: filtered_data.length,
      //     count: paginated_data.length,
      //   };
      // }
      // return cachedData;
      // return filtered_data;
      return {
        products: filtered_data,
        // count: filtered_data.length,
        count: filtered_data.length,
      };
    }

    // If no cache, fetch from API
    const response = await fetch(url);
    const products = await response.json();

    // Store all products
    await Promise.all([
      cacheProducts(products),
      storeIndividualProducts(products),
      ...products.map((product) => storeImage(product.image)),
    ]);

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    const cachedData = await getCachedProducts();
    if (cachedData) return cachedData;
    throw error;
  }
}

// Clear cache function
export async function clearProductsCache() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.PRODUCTS, 'readwrite');
    const store = transaction.objectStore(STORE_NAMES.PRODUCTS);
    const request = store.clear();

    request.onsuccess = () => {
      console.log('Products cache cleared');
      resolve();
    };
    request.onerror = () => reject(request.error);
  });
}
