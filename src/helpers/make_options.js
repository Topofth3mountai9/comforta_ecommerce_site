export function make_options(lists) {
  let wanted = lists.map((list) => ({
    value: list[Object.keys(list)[1]],
    label: list[Object.keys(list)[1]],
  }));
  return wanted;
}
