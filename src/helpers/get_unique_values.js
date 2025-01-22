export function get_unique_values(data, type) {
  return ['all', ...new Set(data.flatMap((item) => item[type]))];
}
