import { single_product_url } from '../constants';
import { initDB, STORE_NAMES, storeImage } from './db';

// Store single product in IndexedDB
async function cacheSingleProduct(product) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAMES.SINGLE_PRODUCTS,
      'readwrite'
    );
    const store = transaction.objectStore(STORE_NAMES.SINGLE_PRODUCTS);

    const data = {
      id: product.id,
      timestamp: Date.now(),
      data: product,
    };

    store.put(data);

    transaction.oncomplete = () => {
      console.log('Single product cached successfully');
      resolve();
    };
    transaction.onerror = () => reject(transaction.error);
  });
}

// Get cached single product from IndexedDB
async function getCachedSingleProduct(productId) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.SINGLE_PRODUCTS, 'readonly');
    const store = transaction.objectStore(STORE_NAMES.SINGLE_PRODUCTS);
    const request = store.get(productId);

    request.onsuccess = () => {
      const cachedData = request.result;
      if (!cachedData) return resolve(null);
      // Remove cache expiration check to store permanently
      resolve(cachedData.data);
    };
    request.onerror = () => reject(request.error);
  });
}

// Main fetch function
export async function fetch_single_product(url) {
  // console.log(url.split('id='))[-1];
  const unique_companies = ['marcos', 'liddy', 'ikea', 'caressa'];
  const unique_categories = [
    'office',
    'living room',
    'kitchen',
    'bedroom',
    'dining',
    'kids',
  ];
  // return {
  //   id: url.split('id=')[1],
  //   stock: 7,
  //   price: 64200,
  //   category: unique_categories[Math.floor(Math.random() * 6)],
  //   images: [
  //     {
  //       id: 'att76',
  //       url: `/gallery/gallery_${Math.floor(Math.random() * 3) + 1}.jpg`,
  //       filename: 'product_6.jpg',
  //     },
  //   ],
  //   reviews: 66,
  //   stars: 4.5,

  //   name: 'placeholder',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea nobis ipsum.',
  //   // colors: ['#ff0000', '#00ff00', '#0000ff', '#000', '#ffb900'].slice(
  //   //   0,
  //   //   Math.floor(Math.random() * 5)
  //   // ),
  //   company: unique_companies[Math.floor(Math.random() * 3)],
  // };
  try {
    // Extract product ID from URL
    const productId = url.split('id=')[1];

    // First, check if we have cached data
    const cachedData = await getCachedSingleProduct(productId);

    if (cachedData) {
      console.log('Using cached single product data');
      return cachedData;
    }

    // If no cache, fetch from API
    const response = await fetch(url);
    const data = await response.json();

    // Store both product data and image
    await Promise.all([cacheSingleProduct(data), storeImage(data.image)]);

    return data;
  } catch (error) {
    console.error('Error fetching single product:', error);
    // If fetch fails, try to return cached data
    const productId = url.split('id=')[1];
    const cachedData = await getCachedSingleProduct(productId);
    if (cachedData) {
      console.log('Using cached data due to fetch error');
      return cachedData;
    }
    throw error;
  }
}

// Clear cache function
export async function clearSingleProductCache() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAMES.SINGLE_PRODUCTS,
      'readwrite'
    );
    const store = transaction.objectStore(STORE_NAMES.SINGLE_PRODUCTS);
    const request = store.clear();

    request.onsuccess = () => {
      console.log('Single product cache cleared');
      resolve();
    };
    request.onerror = () => reject(request.error);
  });
}
