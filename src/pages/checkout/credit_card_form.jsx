import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form_row } from '../../components/form_row.component';
import Input_field from '../../components/input_field.component';
import {
  get_any_input_validation,
  get_date_input_validation,
} from '../../helpers/get_any_input_validation';
import styled from 'styled-components';
import { respond_to } from '../../helpers/breakpoints';

const CreditCardFormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  ${respond_to('500')} {
    grid-template-columns: 1fr;
  }
`;

function CreditCardForm() {
  const methods = useForm();

  const name_validation = get_any_input_validation(
    'Name on card',
    'text',
    true
  );
  const card_number_validation = get_any_input_validation(
    'Card Number',
    'number',
    true
  );
  const ccv_validation = get_any_input_validation('CCV', 'number', true);

  const exploration_validation = get_date_input_validation('Exploration', true);
  return (
    <FormProvider {...methods}>
      <CreditCardFormWrapper>
        <Form_row>
          <Input_field title="NAME ON CARD" {...name_validation} />
        </Form_row>
        <Form_row>
          <Input_field title="Card Number" {...card_number_validation} />
        </Form_row>
        <Form_row>
          <Input_field title="Exploration" {...exploration_validation} />
        </Form_row>
        <Form_row>
          <Input_field title="CCV" {...ccv_validation} />
        </Form_row>
      </CreditCardFormWrapper>
    </FormProvider>
  );
}

export default CreditCardForm;
