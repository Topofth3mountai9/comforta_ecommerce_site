import { useQueryClient, useQuery } from '@tanstack/react-query';
import { usePaginationContext } from '../context/PaginationContext';
import { useSearchParams } from 'react-router-dom';
import { get_current_filters } from '../helpers/filter_helpers';
import { fetch_frequently_used_products } from '../services/fetch_frequently_used_products';
import { products_url, results_on_the_screen } from '../constants';

export function useGetFrequentlyViewedProducts() {
  const query_client = useQueryClient();
  const [search_params, set_search_params] = useSearchParams();
  const { frequently_viewed_items_page } = usePaginationContext();
  console.log(frequently_viewed_items_page);
  //getting all the filters
  const sort_by = search_params.get('sort_by') || 'price-desc';
  const filters = { ...get_current_filters(), sort_by };
  console.log(filters);
  const {
    data: response = { all_products: [], products: [], count: 0 },
    error,
    isLoading: is_getting_frequently_viewed_products,
  } = useQuery({
    queryKey: ['frequently_viewed_products', filters],
    queryFn: () => fetch_frequently_used_products({ products_url, filters }),
  });

  //PREFETCHING
  //the way it works is we call the prefetch on the query client

  //it should only fetch for the next page if we are not on the last
  let num_of_pages_to_cycle_through = Math.ceil(
    response.count / results_on_the_screen
  );
  console.log(num_of_pages_to_cycle_through);

  //for similar items pages
  if (frequently_viewed_items_page < num_of_pages_to_cycle_through) {
    query_client.prefetchQuery({
      // queryKey: ['products', page + 1],
      queryKey: [
        'frequently_viewed_products',
        {
          ...filters,
          frequently_viewed_items_page: frequently_viewed_items_page + 1,
        },
      ],
      // queryFn: () => fetch_frequently_used_products({ products_url, page: page + 1 }),
      queryFn: () =>
        fetch_frequently_used_products({
          products_url,
          filters: {
            ...filters,
            frequently_viewed_items_page: frequently_viewed_items_page + 1,
          },
        }),
    });
  }

  if (frequently_viewed_items_page > 1) {
    query_client.prefetchQuery({
      queryKey: [
        'frequently_viewed_products',
        {
          ...filters,
          frequently_viewed_items_page: frequently_viewed_items_page - 1,
        },
      ],
      queryFn: () =>
        fetch_frequently_used_products({
          products_url,
          filters: {
            ...filters,
            frequently_viewed_items_page: frequently_viewed_items_page - 1,
          },
        }),
    });
  }
  //   console.log(response.products);
  return {
    all_products: response.all_products,
    found_products: response.products,
    count: response.count,
    error,
    is_getting_frequently_viewed_products,
  };
}
