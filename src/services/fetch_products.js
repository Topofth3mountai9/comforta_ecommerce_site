// import { results_on_the_screen } from '../constants';
// import { all_products } from '../data';
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

// Main fetch function
export async function fetch_products({ url, filters }) {
  //pulling everything out
  const {
    search,
    page,
    limit,
    category,
    colors,
    company,
    price_below,
    sort_by,
  } = filters;
  let current_filters = filters;
  let filtered_data = all_products;
  console.log(current_filters);

  // let wanted = {
  //   products: all_products,
  //   count: all_products.length,
  // };
  // console.log(wanted);
  try {
    // Check for cached data first
    const cachedData = await getCachedProducts();
    console.log(cachedData);
    if (cachedData) {
      const [obj_from_db] = cachedData;
      const all_products = obj_from_db.data || [];
      let filtered_data = obj_from_db.data || [];
      console.log(filtered_data);

      //apply filters

      //start of search
      const current_search_value = search;
      console.log(current_search_value);
      filtered_data = current_search_value
        ? all_products.filter((product) =>
            product.name
              .toLowerCase()
              .includes(current_search_value.toLowerCase())
          )
        : filtered_data;

      for (let [key, value] of Object.entries(current_filters)) {
        //confirming if the function exists
        if (filter_functions[key]) {
          filtered_data = filter_functions[key](filtered_data, value);
        }
      }

      //applying sorting
      const sort_fn = sort_functions[sort_by];

      filtered_data = sort_fn ? sort_fn(filtered_data) : filtered_data;

      //applying pagination
      const start = (page - 1) * limit;
      const end = start + limit;
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

    //apply filters

    //start of search
    const current_search_value = search;
    console.log(current_search_value);
    filtered_data = current_search_value
      ? all_products.filter((product) =>
          product.name
            .toLowerCase()
            .includes(current_search_value.toLowerCase())
        )
      : filtered_data;

    for (let [key, value] of Object.entries(current_filters)) {
      //confirming if the function exists
      if (filter_functions[key]) {
        filtered_data = filter_functions[key](filtered_data, value);
      }
    }

    //applying sorting
    const sort_fn = sort_functions[sort_by];

    filtered_data = sort_fn ? sort_fn(filtered_data) : filtered_data;

    //applying pagination
    //applying pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated_data = filtered_data.slice(start, end);

    return {
      all_products,
      products: paginated_data,
      count: filtered_data.length,
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
