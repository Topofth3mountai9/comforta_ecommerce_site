export function create_options(list) {
  return list.map((type) => {
    return {
      value: type,
      label: type,
    };
  });
}

// let s = create_options(['all', 'ikea', 'one', 'two', 'three']);
// console.log(s);
