import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { fetch_products } from '../services/fetch_productsV1';
import { products_url, results_on_the_screen } from '../constants';
import { useSearchParams } from 'react-router-dom';
import { usePaginationContext } from '../context/PaginationContext';
import { fetch_products } from '../services/fetch_products';

import { all_products } from '../data';
import { get_current_filters } from '../helpers/filter_helpers';

export function useGetProducts(type_of_products) {
  const query_client = useQueryClient();
  const [search_params, set_search_params] = useSearchParams();
  const { page } = usePaginationContext();

  //GETTING ALL THE FILTERS
  const sort_by = search_params.get('sort_by') || 'price-desc';
  const filters = { ...get_current_filters(), sort_by };
  console.log(filters);

  const {
    // data: all_products = {},
    // data: all_products = {},
    data: response = { all_products: [], products: [], count: 0 },
    error,
    isLoading: is_getting_products,
  } = useQuery({
    queryKey: ['products', filters],
    // queryFn: () => fetch_products({ products_url, filters }),
    queryFn: () => fetch_products({ products_url, filters }),
    // queryFn: () => fetch_products(products_url),
    // queryFn: () => fetch_products(products_url),
  });

  console.log(response);

  //PREFETCHING
  //the way it works is we call the prefetch on the query client

  //it should only fetch for the next page if we are not on the last page
  let num_of_pages_to_cycle_through = Math.ceil(
    response.count / results_on_the_screen
  );
  if (page < num_of_pages_to_cycle_through) {
    query_client.prefetchQuery({
      // queryKey: ['products', page + 1],
      queryKey: ['products', { ...filters, page: page + 1 }],
      // queryFn: () => fetch_products({ products_url, page: page + 1 }),
      queryFn: () =>
        fetch_products({
          products_url,
          filters: { ...filters, page: page + 1 },
        }),
    });
  }

  if (page > 1) {
    query_client.prefetchQuery({
      queryKey: ['products', { ...filters, page: page - 1 }],
      queryFn: () =>
        fetch_products({
          products_url,
          filters: { ...filters, page: page - 1 },
        }),
    });
  }

  // for frequently viewed items

  // return { found_products, error, is_getting_products, count };
  return {
    all_products: response.all_products,
    found_products: response.products,
    count: response.count,
    error,
    is_getting_products,
  };
}
