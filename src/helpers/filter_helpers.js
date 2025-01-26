import { useSearchParams } from 'react-router-dom';
import { usePaginationContext } from '../context/PaginationContext';
import { results_on_the_screen } from '../constants';

export const to_be_removed_when_searching = ['category', 'colors', 'company'];

export function get_current_filters() {
  const [search_params] = useSearchParams();
  const { page, similar_items_page, frequently_viewed_items_page } =
    usePaginationContext();
  return {
    search: search_params.get('search') || '',
    category: search_params.get('category') || 'all',
    colors: search_params.get('colors') || 'all',
    company: search_params.get('company') || 'all',
    price_below: search_params.get('price_below') || Infinity,
    page,
    similar_items_page,
    frequently_viewed_items_page,
    limit: results_on_the_screen,
  };
}

export const filter_functions = {
  // search: (products, )
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
    value === 'all'
      ? products
      : products.filter((product) => product.price <= Number(value) * 100),
};

//defining sort functions

const collator = new Intl.Collator().compare;

export const sort_functions = {
  'price-desc': (products) => [...products].sort((a, b) => b.price - a.price),
  'price-asc': (products) => [...products].sort((a, b) => a.price - b.price),
  'name-a': (products) =>
    [...products].sort((a, b) =>
      a.name.split(' ')[0].localeCompare(b.name.split(' ')[0])
    ),
  'name-z': (products) =>
    [...products].sort((a, b) =>
      b.name.split(' ')[0].localeCompare(a.name.split(' ')[0])
    ),
  //   'name-z': (products) => {
  // const all_names = products.map(p => p.name.split(' ')[0])
  // let wanted_names_ordered =  [...all_names].sort(collator)
  //   }
  // [...products].sort((a, b) =>
  //   b.name.split(' ')[0].localeCompare(a.name.split(' ')[0])
  // ),
};
