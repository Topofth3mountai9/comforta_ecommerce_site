import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetch_products } from '../services/fetch_products';
import { products_url, results_on_the_screen } from '../constants';
import { useSearchParams } from 'react-router-dom';
import { usePaginationContext } from '../context/PaginationContext';

export function useGetProducts() {
  const query_client = useQueryClient();
  // const [search_params, set_search_params] = useSearchParams();
  const { page } = usePaginationContext();

  //typically we get all the filter parameters
  //but we'll just get the pagination here
  // const filters = {
  //   page,
  //   limit: results_on_the_screen,
  // };

  const {
    // data: products = [],
    data: response = { products: [], count: 0 },
    error,
    isLoading: is_getting_products,
  } = useQuery({
    queryKey: ['products', page],
    // queryFn: () => fetch_products({ products_url, filters }),
    queryFn: () => fetch_products({ products_url }),
  });

  console.log(response);
  //PAGINATION
  // let page = !search_params.get('page') ? 1 : Number(search_params.get('page'));
  // console.log(products);
  // const [found_products, count] = products;
  // console.log(count);

  //PREFETCHING
  //the way it works is we call the prefetch on the query client

  //it should only fetch for the next page if we are not on the last page
  let num_of_pages_to_cycle_through = Math.ceil(
    response.count / results_on_the_screen
  );
  if (page < num_of_pages_to_cycle_through) {
    query_client.prefetchQuery({
      queryKey: ['products', page + 1],
      // queryKey: ['products', filters],
      queryFn: () => fetch_products({ products_url, page: page + 1 }),
      // queryFn: () =>
      //   fetch_products({
      //     products_url,
      //     filters: { page: page + 1, limit: results_on_the_screen },
      //   }),
    });
  }
  if (page > 1) {
    query_client.prefetchQuery({
      queryKey: ['products', page - 1],
      queryFn: () =>
        fetch_products({
          products_url,
          page: page - 1,
        }),
    });
  }
  // return { found_products, error, is_getting_products, count };
  return {
    found_products: response.products,
    count: response.count,
    error,
    is_getting_products,
  };
}
