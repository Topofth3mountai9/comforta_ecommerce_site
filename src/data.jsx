import {
  ArrowUp,
  Facebook,
  Globe,
  Instagram,
  Layers,
  Mail,
  Milestone,
  PenTool,
  Phone,
  Pointer,
  Printer,
  TrendingUp,
  Truck,
  Twitter,
} from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaParagraph,
  FaPinterest,
  FaTwitter,
  FaX,
} from 'react-icons/fa6';
import {
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';

export const nav_links = [
  {
    id: 1,
    label: 'Home',
    url: '/home',
  },
  {
    id: 2,
    label: 'About',
    url: '/about',
  },
  {
    id: 3,
    label: 'Contact',
    url: '/contact',
  },
  {
    id: 4,
    label: 'Products',
    url: '/products',
  },
];

export const cart_button_links = [
  {
    id: 1,
    label: 'Cart',
    icon: <HiOutlineShoppingCart />,
    url: '/cart',
  },
  {
    id: 2,
    label: 'Login',
    icon: <HiOutlineUser />,
    url: '/login',
  },
];

export const services = [
  {
    id: 1,

    image: '/services/drawer_show.jpg',
  },
  {
    id: 2,
    icon: <Truck />,
    title: 'Delivery and installation',
    description:
      'Enjoy hassle-free delivery and professional installation services to ensure your furniture is set up and ready to use',
  },
  {
    id: 3,

    image: '/services/deep_work.jpg',
  },
  {
    id: 4,
    icon: <PenTool />,
    title: 'Furniture Design',
    description:
      'Collaborate with our expert designers to create custom furniture pieces tailored to your style and needs',
  },
  {
    id: 5,

    image: '/services/helmet.jpg',
  },
  {
    id: 6,
    icon: <Layers />,
    title: 'Furniture Manufacturing',
    description:
      'Utilizing high quality materials and state-of-the-art technology, we ensure that every piece is crafted to perfection',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'How do I place an order?',
    answer:
      'You can place an order by clicking on the product you want to buy and adding it to your cart.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers.',
  },
  {
    id: 3,
    question: 'Do you offer customization options for furniture?',
    answer:
      'Yes, we offer customization options for furniture. You can choose the size, color, and style of the furniture you want to buy.',
  },
  {
    id: 4,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all products.',
  },
];

export const testimonials = [
  {
    id: 1,
    date: '2024-15-09',
    testimony:
      'Exceeded my expectations! Quality furniture and outstanding services. Highly recommended!',
    name: 'David Rayder',
    image: '/testimonials/client1.jpg',
  },
  {
    id: 2,
    date: '2024-15-09',
    testimony:
      'Exceptional quality and service! Highly recommend your furniture company for all your furniture needs.',
    name: 'Mustafa Ali',
    image: '/testimonials/client2.jpg',
  },
  {
    id: 3,
    date: '2024-15-09',
    testimony:
      'Your furniture exceeded my expectations! Great craftsmanship and attention to detail.',
    name: 'Christian Cage',
    image: '/testimonials/client3.jpg',
  },
  {
    id: 4,
    date: '2024-15-09',
    testimony:
      'So happy with my purchase! The furniture is exactly what I was looking for and the delivery was fast and efficient.',
    name: 'Skye Blue',
    image: '/testimonials/client4.jpg',
  },
  {
    id: 5,
    date: '2024-15-09',
    testimony:
      'Great furniture and exceptional customer service! I highly recommend this company.',
    name: 'Hikaru Shida',
    image: '/testimonials/client5.jpg',
  },
];

export const gallery = [
  {
    id: 1,
    url: '/gallery/gallery_1.jpg',
    alt: 'gallery image 1',
  },
  {
    id: 2,
    url: '/gallery/gallery_2.jpg',
    alt: 'gallery image 2',
  },
  {
    id: 3,
    url: '/gallery/gallery_3.jpg',
    alt: 'gallery image 3',
  },
  {
    id: 4,
    url: '/gallery/gallery_4.jpg',
    alt: 'gallery image 4',
  },
  {
    id: 5,
    url: '/gallery/gallery_5.jpg',
    alt: 'gallery image 5',
  },
  {
    id: 6,
    url: '/gallery/gallery_6.jpg',
    alt: 'gallery image 6',
  },
  {
    id: 7,
    url: '/gallery/gallery_7.jpg',
    alt: 'gallery image 7',
  },
  {
    id: 8,
    url: '/gallery/gallery_8.jpg',
    alt: 'gallery image 8',
  },
];

export const all_products = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'accent chair',
    price: 25999,
    image: '/products/product-1.jpeg',
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
    image: '/products/product-2.jpeg',
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
    image: '/products/product-3.jpeg',
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
    image: '/products/product-4.jpeg',
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
    image: '/products/product-5.jpeg',
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
    image: '/products/product-6.jpeg',
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
    image: '/products/product-7.jpeg',
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
    image: '/products/product-8.jpeg',
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
    image: '/products/product-9.jpeg',
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
    image: '/products/product-10.jpeg',
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
    image: '/products/product-11.jpeg',
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
    image: '/products/product-12.jpeg',
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
    image: '/products/product-13.jpeg',
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
    image: '/products/product-14.jpeg',
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
    image: '/products/product-15.jpeg',
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
    image: '/products/product-16.jpeg',
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
    image: '/products/product-17.jpeg',
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
    image: '/products/product-18.jpeg',
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
    image: '/products/product-19.jpeg',
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
    image: '/products/product-20.jpeg',
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
    image: '/products/product-21.jpeg',
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
    image: '/products/product-22.jpeg',
    featured: true,
    colors: ['#ffb900', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
    shipping: true,
  },
];

export const social_media_links = [
  {
    id: 1,
    icon: <Facebook />,
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: <Instagram />,
    url: 'https://www.instagram.com',
  },
  {
    id: 1,
    icon: <Twitter />,
    url: 'https://www.twitter.com',
  },
];

export const about_item_descriptions = [
  {
    id: 1,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam, possimus modi quos laudantium dicta.',
  },
  {
    id: 2,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam, possimus modi quos laudantium dicta.',
  },
  {
    id: 3,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam, possimus modi quos laudantium dicta.',
  },
];

export const product_technical_info = [
  {
    id: 1,
    brand: 'Ikea',
    color: 'red',
    product_dimensions: "24'D x 24.4'W x 35.8'H",
    size: 'Large',
    extra_info: {
      asin: 'B078dyj1Pf5K',
      customer_reviews: 7900,
      best_seller_rank: '#45 in Home',
      date_first_amiable: 'February 03 2025',
    },
  },
];

export const journey_story_info = [
  {
    id: 1,
    image: '/services/deep_work.jpg',
    icon: <Pointer />,
    title: 'From humble beginnings',
    paragraph:
      'Our story began in 2010 in a small wooden workshop, drivenby a passion for creating beautiful and comfortable furniture. What started as a modest operation has grown into a beloved brand known for its quality and design',
  },
  {
    id: 2,
    image: '/services/people_meeting.jpg',
    icon: <Milestone />,
    title: 'Milestones and achievements',
    paragraph:
      'Over the years we have reached several significant milestones. In 2012, we launched our first online store, making pur products accessible to a wider audience. By 2015,we had expanded our product line to include not only classic furniture pieces but also contemporary designs that cater to modern tastes ',
  },
  {
    id: 3,
    image: '/services/drawer_show.jpg',
    icon: <TrendingUp />,
    title: 'Innovation and growth',
    paragraph:
      'Innovation has always been at the heart of what we do. In 2028, we introduced our first line of eco-friendly furnture , crafted from sustainable materials. This commitment has not only won us accolades but also the trust and loyalty of our customers',
  },
  {
    id: 4,
    image: '/faq/support_team.jpg',
    icon: <Globe />,
    title: 'Our global reach',
    paragraph:
      'Today, comforta, serves customers around the world.With distribution centers in key locations, we ensure that our high-quality furnture reaches your home efficiently and safely. Our global presence is a testament to the love and support of our customers, who continue to inspire us to continue our journey.',
  },
  {
    id: 5,
    image: '/choose_us/interior_design.jpg',
    icon: <ArrowUp />,
    title: 'Looking ahead',
    paragraph:
      "As we look to the future, our goal reamins the same: to create furniture that combines style, comfort, and sustainability. Wer'e excited about the new designs and inovations we have in store, and we're commited to making your home a beautiful, comfotable and happy place ",
  },
];

export const team_info = [
  {
    id: 1,
    image: '/testimonials/client3.jpg',
    name: 'Christian Cage',
    position: 'CEO & Owner',
    social_media_links: [
      {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com',
      },
      {
        icon: <FaTwitter />,
        url: 'https://www.twitter.com',
      },
    ],
  },
  {
    id: 2,
    image: '/testimonials/client2.jpg',
    name: 'Harsh Patel',
    position: 'Lead Interior designer',
    social_media_links: [
      {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com',
      },
      {
        icon: <FaTwitter />,
        url: 'https://www.twitter.com',
      },
    ],
  },
  {
    id: 3,
    image: '/testimonials/client1.jpg',
    name: 'Orange Sid',
    position: 'DIY Expert',
    social_media_links: [
      {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com',
      },
      {
        icon: <FaTwitter />,
        url: 'https://www.twitter.com',
      },
    ],
  },
];

export const about_page_testimonials = [
  {
    id: 1,
    name: 'Apollo Crews',
    img: '/testimonials/client3.jpg',
    location: '-New York, NY',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi quaerat porro quidem minus illum at cumque accusamus sed ex!',
  },
  {
    id: 2,
    name: 'Sasha Banks',
    img: '/testimonials/client5.jpg',
    location: '-Boston, MA',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi quaerat porro quidem minus illum at cumque accusamus sed ex!',
  },
];

export const company_info = [
  {
    id: 1,
    icon: <Mail />,
    // icon: <HiOutlineMail />,
    label: 'Mail',
    info: 'comforta_support@protonmail.co',
    colors: {
      light_main: '#fff0e6',
      main: '#ff681d',
    },
  },
  {
    id: 2,
    // icon: <Phone />,
    icon: <HiOutlinePhone />,
    label: 'Phone',
    info: '+254 01405074838',
    colors: {
      light_main: '#EBEEFF',
      main: '#1B41FF',
    },
  },
  {
    id: 3,
    icon: <Printer />,
    label: 'Fax',
    info: '(401) 279-9587',
    colors: {
      light_main: '#F4EEFA',
      main: '#9253D0',
    },
  },
  {
    id: 4,
    icon: <HiOutlineOfficeBuilding />,
    label: 'Office',
    info: 'comforta_support@protonmail.co',
    colors: {
      light_main: '#E7F7EF',
      main: '#64CC97',
    },
  },
];

export const company_socials = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: <FaFacebook />,
    url: 'https://www.facebook.com',
  },
  {
    id: 4,
    icon: <FaPinterest />,
    url: 'https://www.pinterest.com',
  },
];
