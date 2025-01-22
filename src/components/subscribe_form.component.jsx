import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { get_any_input_validation } from '../helpers/get_any_input_validation';
import Input_field from './input_field.component';
import { theme } from '../styles/theme';
import styled from 'styled-components';

const Subscribe_Form_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const email_address_validation = get_any_input_validation(
  'Email Address',
  'text',
  true
);

function Subscribe_form() {
  const methods = useForm();

  const { handleSubmit } = methods;

  function handle_submit(data) {
    console.log(data);
  }
  return (
    <FormProvider {...methods}>
      <Subscribe_Form_Container>
        <form
          className="form flex_items align_middle g_1"
          onSubmit={handleSubmit(handle_submit)}
        >
          <Input_field
            title="Email address"
            background={theme.colors.secondary}
            {...email_address_validation}
            layout="row"
          />
          <button className="btn btn-lg btn-secondary">subscribe</button>
        </form>
      </Subscribe_Form_Container>
    </FormProvider>
  );
}

export default Subscribe_form;
