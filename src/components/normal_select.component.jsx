import React, { useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

// import styles from './normal_select.module.scss';

const SelectWrapper = styled.select`
  .active {
    background: ${({ theme }) => theme.colors.light_secondary};
    color: #fff;
  }
`;

function Normal_select({ options, handle_change, value }) {
  const [search_params, set_search_params] = useSearchParams();
  const current_sort_filter = search_params.get('sort_by');
  // console.log(current_sort_filter);

  //   console.log(form_data);
  //   function handle_change(event) {
  //     set_form_data(event.target.value);
  //     set_student_sort_value(event.target.value);
  //     search_params.set('sort_by', value);
  //   }

  return (
    <div>
      <SelectWrapper
        name="sort_by"
        id="sort_by"
        className="select_container"
        value={value}
        onChange={handle_change}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            onClick={handle_change}
            className={`${
              option.value === current_sort_filter ? 'active' : null
            }`}
            // className={`${styles.option} ${
            //   option.value === current_sort_filter ? styles['active'] : ''
            // }`}
          >
            {option.label}
          </option>
        ))}
      </SelectWrapper>
    </div>
  );
}

export default Normal_select;
