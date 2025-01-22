// Constants
export const DB_NAME = 'FurnitureStoreDB';
export const DB_VERSION = 4;
export const STORE_NAMES = {
  PRODUCTS: 'products',
  SINGLE_PRODUCTS: 'single_products',
  ALL_PRODUCTS: 'all_products',
  IMAGES: 'images',
};

// Initialize the database with multiple stores
export function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAMES.PRODUCTS)) {
        db.createObjectStore(STORE_NAMES.PRODUCTS, { keyPath: 'id' });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.SINGLE_PRODUCTS)) {
        db.createObjectStore(STORE_NAMES.SINGLE_PRODUCTS, { keyPath: 'id' });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.ALL_PRODUCTS)) {
        db.createObjectStore(STORE_NAMES.ALL_PRODUCTS, { keyPath: 'id' });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.IMAGES)) {
        db.createObjectStore(STORE_NAMES.IMAGES, { keyPath: 'url' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Helper function to store individual products from the main list
export async function storeIndividualProducts(products) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.ALL_PRODUCTS, 'readwrite');
    const store = transaction.objectStore(STORE_NAMES.ALL_PRODUCTS);

    // Add each product individually with timestamp
    products.forEach((product) => {
      store.put({
        ...product,
        timestamp: Date.now(),
      });
    });

    transaction.oncomplete = () => {
      console.log('All individual products stored successfully');
      resolve();
    };
    transaction.onerror = () => reject(transaction.error);
  });
}

// Helper function to get a product by ID from ALL_PRODUCTS store
export async function getProductById(productId) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAMES.ALL_PRODUCTS, 'readonly');
    const store = transaction.objectStore(STORE_NAMES.ALL_PRODUCTS);
    const request = store.get(productId);

    request.onsuccess = () => {
      const product = request.result;
      if (!product) {
        resolve(null);
        return;
      }
      resolve(product);
    };
    request.onerror = () => reject(request.error);
  });
}

export function deleteDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(DB_NAME);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      console.log('Database deleted successfully');
      resolve();
    };
  });
}

export async function storeImage(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAMES.IMAGES, 'readwrite');
      const store = transaction.objectStore(STORE_NAMES.IMAGES);

      store.put({
        url: url,
        blob: blob,
        timestamp: Date.now(),
      });

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error('Error storing image:', error);
  }
}
