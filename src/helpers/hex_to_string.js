const hex_to_string_dict = {
  '#ff0000': 'red',
  '#00ff00': 'green',
  '#0000ff': 'blue',
  '#000': 'black',
  '#ffb900': 'yellow',
};

export function hex_color_to_string(hex) {
  return hex_to_string_dict[hex];
}
