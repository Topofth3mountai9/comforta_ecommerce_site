import React, { useState } from 'react';
import Normal_select from './normal_select.component';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const SortByWrapper = styled.div`
  h5 {
    margin-bottom: 0.5rem;
  }
`;

function Sort_by({ sort_options, sort_header, other_class }) {
  //we need to pass down the function that can handle the change
  //so that our component can be reusable

  const [form_data, set_form_data] = useState();

  //so that we can use the params on the url
  const [search_params, set_search_params] = useSearchParams();

  //whatever is on the url is what is selected by default
  const sort_by = search_params.get('sort_by') || '';

  function handle_change(event) {
    set_form_data(event.target.value);
    search_params.set('sort_by', event.target.value);
    set_search_params(search_params);
  }

  return (
    <SortByWrapper className={other_class}>
      <h5>{sort_header}</h5>
      <Normal_select
        options={sort_options}
        handle_change={handle_change}
        value={sort_by}
      />
    </SortByWrapper>
  );
}

export default Sort_by;
