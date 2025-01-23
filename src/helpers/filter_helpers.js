import { useSearchParams } from 'react-router-dom';
import { usePaginationContext } from '../context/PaginationContext';
import { results_on_the_screen } from '../constants';

export function get_current_filters() {
  const [search_params] = useSearchParams();
  const { page } = usePaginationContext();
  return {
    search: search_params.get('search') || '',
    category: search_params.get('category') || 'all',
    colors: search_params.get('colors') || 'all',
    company: search_params.get('company') || 'all',
    price_below: search_params.get('price_below') || Infinity,
    page,
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
