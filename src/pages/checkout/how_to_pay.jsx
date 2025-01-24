import React, { useState } from 'react';
import styled from 'styled-components';
// import TabsRadio from '../../ui/tabs_radio';

import CreditCardForm from './credit_card_form';
import PayPalForm from './pay_pal_form';
import GiftCardForm from './gift_card_form';
import TabsRadio from '../../ui/tabs_radio';
import { theme } from '../../styles/better_theme';
import Input_field from '../../components/input_field.component';
import { FormProvider, useForm } from 'react-hook-form';
import { Form_row } from '../../components/form_row.component';
import Input from '../../ui/Input';

const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */

  .t_and_c {
    margin-top: -1.5rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;

  label {
    font-size: ${({ theme }) => theme.typography.text.xs};
    color: ${({ theme, value }) =>
      value ? theme.colors.primary : theme.colors.grey.f};
  }
`;

const FormRowTerms = styled(FormRow)`
  label {
    color: ${({ theme, value }) =>
      value ? theme.colors.grey.h : theme.colors.grey.f};
  }
`;

function HowToPay() {
  const methods = useForm();
  const [form_data, set_form_data] = useState({
    shipping_as_billing: false,
    accepting_terms_and_conditions: false,
  });

  console.log(form_data);

  const [billing_is_checked, set_billing_checked] = useState(false);
  const [terms_is_checked, set_terms_checked] = useState(false);

  function handle_change(event) {
    let { name, type, value, checked } = event.target;
    set_form_data((prev_form_data) => {
      return {
        ...prev_form_data,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handle_submit(event) {
    event.preventDefault();
    set_billing_checked(form_data.shipping_as_billing);
    set_terms_checked(form_data.accepting_terms_and_conditions);
  }
  return (
    <Wrapper className="mt-24">
      <div className="left">
        <h3 className={`text-[${theme.colors.grey.h}] mb-4`}>
          How would you like to Pay?
        </h3>
        <TabsRadio default_tab="credit_card">
          <TabsRadio.TabsList>
            <TabsRadio.Tab label="Credit Card" value="credit_card" />
            {/* <TabsRadio.Tab label="PayPal" value="pay_pal" />
            <TabsRadio.Tab label="GiftCard" value="gift_card" /> */}
          </TabsRadio.TabsList>
          <TabsRadio.TabPanel value="credit_card">
            <CreditCardForm />
          </TabsRadio.TabPanel>
          {/*<TabsRadio.TabPanel value="pay_pal">
            <PayPalForm />
          </TabsRadio.TabPanel>
          <TabsRadio.TabPanel value="gift_card">
            <GiftCardForm />
          </TabsRadio.TabPanel> */}
        </TabsRadio>
        <FormProvider {...methods}>
          <div className="terms_and_conditions">
            <FormRow value={form_data.shipping_as_billing}>
              {/* <Input_field
                id="shipping_as_billing"
                label="Use Shipping address as billing"
                type="checkbox"
                layout="row"
              /> */}
              <Input
                type="checkbox"
                id="shipping_as_billing"
                name="shipping_as_billing"
                value={form_data.shipping_as_billing}
                onChange={handle_change}
              />
              <label htmlFor="shipping_as_billing" className={``}>
                Use Shipping address as billing
              </label>
            </FormRow>
            <FormRowTerms value={form_data.accepting_terms_and_conditions}>
              {/* <Input_field
                id="t_and_c"
                label="I accept Comforta's Terms & Conditions"
                type="checkbox"
                layout="row"
                other_class="t_and_c"
              /> */}
              <Input
                type="checkbox"
                id="accepting_terms_and_conditions"
                name="accepting_terms_and_conditions"
                value={form_data.accepting_terms_and_conditions}
                onChange={handle_change}
              />
              <label htmlFor="accepting_terms_and_conditions" className={``}>
                I accept Comforta's Terms & Conditions
              </label>
            </FormRowTerms>
          </div>
        </FormProvider>
      </div>
    </Wrapper>
  );
}

export default HowToPay;
