import { useQuery } from '@tanstack/react-query';
import { fetch_single_product } from '../services/fetch_single_product';
import { single_product_url } from '../constants';

export function useGetSpecificProduct(specific_product_id) {
  const url = `${single_product_url}${specific_product_id}`;
  console.log(url);
  const {
    data: specific_product,
    error,
    isLoading: is_getting_specific_product,
  } = useQuery({
    queryKey: ['specific_product', specific_product_id],
    queryFn: () => fetch_single_product(url),
  });

  return { specific_product, error, is_getting_specific_product };
}
