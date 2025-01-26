import { all_products } from '../data';
import { filter_functions, sort_functions } from '../helpers/filter_helpers';

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

export async function fetch_similar_products({ url, filters }) {
  const { similar_items_page, limit, sort_by } = filters;
  console.log(similar_items_page);
  let current_filters = filters;
  let filtered_data = all_products;
  // let paginated_data;

  try {
    const cached_data = await getCachedProducts();
    if (cached_data) {
      console.log(cached_data);
      const [obj_from_db] = cached_data;
      const all_products = obj_from_db.data || [];
      let filtered_data = obj_from_db.data || [];

      //apply filters

      //applying pagination
      const start = (similar_items_page - 1) * limit;
      const end = start + limit;
      console.log(start, end);
      const paginated_data = filtered_data.slice(start, end);

      return {
        all_products,
        products: paginated_data,
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
  } catch (error) {
    // Fallback to cached data if available
    const cachedData = await getCachedProducts();
    if (cachedData) {
      const [obj_from_db] = cachedData;
      return {
        products: obj_from_db.data || [],
        count: (obj_from_db.data || []).length,
      };
    }
    //apply filters

    const start = (similar_items_page - 1) * limit;
    const end = start + limit;
    const paginated_data = filtered_data.slice(start, end);

    return {
      all_products,
      products: paginated_data,
      count: filtered_data.length,
    };
  }
}
