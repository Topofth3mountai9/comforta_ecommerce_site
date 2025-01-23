function filter_products(data, type, value) {
  return data.filter((datum) => {
    if (typeof datum[type] === 'object') {
      return datum[type].some((c) => c == value);
    }
    if (typeof datum[type] === 'string') {
      return datum[type] === value;
    }
  });
}

// let unique_companies = ['all', 'ikea', 'one', 'two', 'three'];
// let unique_colors = ['all', 'Red', 'Brown', 'Steel Blue'];
let output_list = [];

// let wanted = unique_companies.map((company) => {
//   return {
//     value: company,
//     label: company,
//   };
// });

// console.log(wanted);

let all_products = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'accent chair',
    price: 25999,
    image: '/gallery/gallery_1.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recEHmzvupvT8ZONH',
    name: 'albany sectional',
    price: 109999,
    image: '/gallery/gallery_2.jpg',
    colors: ['#000', '#ffb900'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'rec5NBwZ5zCD9nfF0',
    name: 'albany table',
    price: 309999,
    image: '/gallery/gallery_3.jpg',
    colors: ['#ffb900', '#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
  },
  {
    id: 'recd1jIVIEChmiwhe',
    name: 'armchair',
    price: 12599,
    image: '/gallery/gallery_4.jpg',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recotY5Nh00DQFdkm',
    name: 'dining table',
    price: 42999,
    image: '/gallery/gallery_5.jpg',
    colors: ['#00ff00', '#0000ff', '#ff0000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'rec1Ntk7siEEW9ha1',
    name: 'emperor bed',
    price: 23999,
    image: '/gallery/gallery_6.jpg',
    colors: ['#0000ff', '#000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recNZ0koOqEmilmoz',
    name: 'entertainment center',
    price: 59999,
    image: '/gallery/gallery_7.jpg',
    featured: true,
    colors: ['#000', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recrfxv3EwpvJwvjq',
    name: 'high-back bench',
    price: 39999,
    image: '/gallery/gallery_8.jpg',
    featured: true,
    colors: ['#000', '#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recoW8ecgjtKx2Sj2',
    name: 'leather chair',
    price: 20099,
    image: '/gallery/gallery_1.jpg',
    colors: ['#ff0000', '#ffb900', '#00ff00'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
  },
  {
    id: 'recEOA6qtDag1hRbU',
    name: 'leather sofa',
    price: 99999,
    image: '/gallery/gallery_1.jeg',
    colors: ['#00ff00', '#0000ff'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'recoAJYUCuEKxcPSr',
    name: 'modern bookshelf',
    price: 31999,
    image: '/gallery/gallery_2.jeg',
    featured: true,
    colors: ['#ffb900', '#ff0000', '#00ff00'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kids',
  },
  {
    id: 'recQ0fMd8T0Vk211E',
    name: 'modern poster',
    price: 3099,
    image: '/gallery/gallery_3.jeg',
    colors: ['#000'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'rec7CjDWKRgNQtrKe',
    name: 'shelf',
    price: 30999,
    image: '/gallery/gallery_4.jeg',
    colors: ['#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'recF0KpwlkF7e8kXO',
    name: 'simple chair',
    price: 109999,
    image: '/gallery/gallery_5.jeg',
    colors: ['#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recs5BSVU3qQrOj4E',
    name: 'sofa set',
    price: 129999,
    image: '/gallery/gallery_6.jeg',
    colors: ['#00ff00', '#ffb900'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recroK1VD8qVdMP5H',
    name: 'suede armchair',
    price: 15999,
    image: '/gallery/gallery_7.jeg',
    colors: ['#ffb900'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'rec7JInsuCEHgmaGe',
    name: 'utopia sofa',
    price: 79999,
    image: '/gallery/gallery_8.jeg',
    featured: true,
    colors: ['#ff0000', '#00ff00'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'rec3jeKnhInKHJuz2',
    name: 'vase table',
    price: 120999,
    image: '/gallery/gallery_1.jeg',
    featured: true,
    colors: ['#ff0000'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'recv2ohxljlK2FZO7',
    name: 'wooden bed',
    price: 250099,
    image: '/gallery/gallery_2.jeg',
    colors: ['#000', '#ffb900'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
  },
  {
    id: 'recJIjREF3dlFi3sR',
    name: 'wooden desk',
    price: 150999,
    image: '/gallery/gallery_3.jeg',
    colors: ['#000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recm7wC8TBVdU9oEL',
    name: 'wooden desk',
    price: 40099,
    image: '/gallery/gallery_4.jeg',
    colors: ['#0000ff', '#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'rectfNsySwAJeWDN2',
    name: 'wooden table',
    price: 234999,
    image: '/gallery/gallery_5.jeg',
    featured: true,
    colors: ['#ffb900', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
    shipping: true,
  },
];

let unique_colors = [
  'all',
  ...new Set(all_products.flatMap((product) => product['colors'])),
];

let unique_categories = [
  'all',
  ...new Set(all_products.flatMap((p) => p['category'])),
];

let unique_companies = [
  'all',
  ...new Set(all_products.flatMap((p) => p['company'])),
];
console.log(unique_companies);
console.log(unique_colors);
console.log(unique_categories);
console.log(unique_colors.slice(1));
let filtered_products;
let colors_filter_value = '#000';
let category_filter_value = 'office';
let i = 0;
function filter_colors() {
  for (let color of unique_colors) {
    console.log(color);
    if (colors_filter_value === color) {
      filtered_products = filter_products(all_products, 'colors', color);
      return filter_products;
    }
  }
}

function filter_categories() {
  for (let category of unique_categories.slice(1)) {
    if (category_filter_value === 'all') {
      filtered_products = all_products;
      return filtered_products;
    }
    if (category_filter_value === category) {
      filtered_products = filter_products(all_products, 'category', category);
      return filtered_products;
    }
  }
}

// filter_colors();
filter_categories();
console.log(filtered_products);

let d = all_products.filter((p) => p['colors'].some((c) => c === '#ff0000'));
console.log(d);

// function fc()
// fc()
console.log(filtered_products);

console.log(typeof '');

let cached_data = [
  {
    id: 'all_products',

    timestamp: 1736427854115,

    data: [
      ({
        id: 'recZkNf2kwmdBcqd0',

        name: 'accent chair',

        price: 25999,

        image: 'https://www.course-api.com/images/store/product-1.jpeg',

        colors: ['#ff0000', '#00ff00', '#0000ff'],

        company: 'marcos',

        description:
          'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',

        category: 'office',

        shipping: true,
      },
      {
        id: 'recEHmzvupvT8ZONH',

        name: 'albany sectional',

        price: 109999,

        image: 'https://www.course-api.com/images/store/product-2.jpeg',

        colors: ['#000', '#ffb900'],

        company: 'liddy',

        description:
          'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',

        category: 'living room',
      }),
    ],
  },
];

console.log(cached_data[0].data);
const [whole_obj] = cached_data;
console.log(whole_obj);

console.log(Math.min(...all_products.flatMap((p) => Number(p['price']) / 100)));

let products_eq_or_below_lowest = all_products.filter(
  (product) => product.price <= Number('30.99') * 100
);

console.log(products_eq_or_below_lowest);

let result = [...all_products];

const filter_functions = {
  category: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.category === value),
  colors: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.colors.some((c) => c === value)),

  company: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.company === value),

  price_below: (products, value) =>
    value === Infinity
      ? products
      : products.filter((product) => product.price <= Number(value) * 100),
};

let current_filters = {
  category: 'bedroom',
  colors: 'all',
  company: 'all',
  price_below: '3099.99',
};

for (let [key, value] of Object.entries(current_filters)) {
  //confirming if the function exists
  if (filter_functions[key]) {
    //if function exists
    result = filter_functions[key](result, value);
  }
}

console.log(result);

products_eq_or_below_lowest = filter_functions['price_below'](
  all_products,
  '30.99'
);

// console.log(products_eq_or_below_lowest);

let temp_cart_map = new Map();

// temp_cart_map.set('one#000', '1_black').set('two#fff', 'two_white');
temp_cart_map.set('recQ0fMd8T0Vk211E#ff0000', {
  name: 'placeholder',
  color_chosen: '#ff0000',
  amount_of_items_chosen: 1,
  image: '/gallery/gallery_3.jpg',
  price: 64200,
  stock_max: 7,
});

// console.log(temp_cart_map);

// console.log(temp_cart_map.has('recQ0fMd8T0Vk211E#ff0000'));

// console.log(temp_cart_map.get('recQ0fMd8T0Vk211E#ff0000'));

// console.log(Math.floor(Math.random() * 7) + 1);

let stock_max = 2;

if (temp_cart_map.has('recQ0fMd8T0Vk211E#ff0000')) {
  //|
  //check this later

  const existing_item = temp_cart_map.get('recQ0fMd8T0Vk211E#ff0000');
  temp_cart_map.set('recQ0fMd8T0Vk211E#ff0000', {
    ...existing_item,
    amount_of_items_chosen:
      existing_item.amount_of_items_chosen < stock_max
        ? existing_item.amount_of_items_chosen + 1
        : stock_max,
  });
}

// console.log(temp_cart_map);

let another_map = new Map();
another_map.set(`fff`, 'white');

// console.log(another_map);
// console.log(another_map.has(`fff`));

let key_1 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

let key_2 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

// console.log(key_1 === key_2);

let specific_product = {
  id: 'recJIjREF3dlFi3sR',

  stock: 5,

  price: 150999,

  shipping: true,

  colors: ['#000'],

  category: 'office',

  images: [
    {
      url: 'https://www.course-api.com/images/store/product-20.jpeg',

      filename: 'product-4.jpeg',
    },
  ],

  reviews: 300,

  stars: 2.2,

  name: 'wooden desk',

  description:
    'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',

  company: 'ikea',
};

console.log(specific_product);

let copy_changed = {
  ...specific_product,
  images: [
    ...specific_product.images,
    {
      ...specific_product.images[0],
      url: `/products/${specific_product.images[0].filename}`,
    },
  ],
};

console.log(copy_changed.images.shift());
console.log(copy_changed);
// console.log(specific_product.images[0]);

export async function fetch_products({ url }) {
  return {
    products: all_products,
    count: all_products.length,
  };
}

const products = await fetch_products({ url: 'somn' });
console.log(products);
