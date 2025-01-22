export function get_any_input_validation(title, type, is_required) {
  let validation;
  let what_id_should_be;
  if (title.includes(' ')) {
    let [first, second] = title.split(' ');
    what_id_should_be = `${first.toLowerCase()}_${second.toLowerCase()}`;
  } else {
    what_id_should_be = title.toLowerCase();
  }

  let must_be_included =
    type === 'text'
      ? {
          maxLength: {
            value: 250,
            message: '20 characters max',
          },
        }
      : {
          pattern: {
            value: /^\d+$/,
            message: 'Amount must be a number!',
          },
          maxLength: {
            value: 12,
            message: '12 characters max!',
          },
        };

  if (is_required) {
    validation = {
      // title: title,
      type: type,
      id: what_id_should_be,
      placeholder: `Enter ${title}...`,
      validationRules: {
        required: {
          value: true,
          // message: `${title.split(' ')[0] || title} is required`,
          message: `${title.toLowerCase()} is required`,
        },
        ...must_be_included,
      },
    };
  }

  if (!is_required) {
    validation = {
      // title: title,
      type: type,
      id: what_id_should_be,
      placeholder: `Enter ${title}...`,
      validationRules: {
        ...must_be_included,
      },
    };
  }

  return validation;
}

export function get_date_input_validation(title, is_required, custom_id) {
  console.log(custom_id);
  let validation;
  let what_id_should_be;
  if (title.includes(' ')) {
    let [first, ...rest] = title.split(' ');

    if (rest.length > 1) {
      what_id_should_be = `${first.toLowerCase()}_${rest[0].toLowerCase()}_${rest[1].toLowerCase()}`;
    } else if (rest.length <= 1) {
      what_id_should_be = `${first.toLowerCase()}_${rest[0].toLowerCase()}`;
    }
  } else {
    what_id_should_be = title.toLowerCase();
  }
  if (is_required) {
    validation = {
      title: title,
      type: 'date',
      id: custom_id || what_id_should_be,
      placeholder: 'Enter date of payment...',
      validationRules: {
        required: {
          value: true,
          message: `${title} is required!`,
        },
      },
    };
  }
  if (!is_required) {
    validation = {
      title: title,
      type: 'date',
      id: custom_id || what_id_should_be,
      placeholder: 'Enter date of payment...',
    };
  }

  return validation;
}
