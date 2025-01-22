export function filter_products(data, type, value) {
  return data.filter((datum) => {
    if (typeof datum[type] === 'object') {
      return datum[type].some((c) => c == value);
    }
    if (typeof datum[type] === 'string') {
      return datum[type] === value;
    }
  });
}

// export function filter_products(data, type, value) {
//   return data.filter((datum) => {
//     return datum[type].some((c) => c === value);
//   });
// }
