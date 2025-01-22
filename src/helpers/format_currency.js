export const format_currency = (value, default_currency = 'USD') => {
  console.log(value, default_currency);
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: default_currency.toLowerCase(),
  }).format(value / 100);
};
