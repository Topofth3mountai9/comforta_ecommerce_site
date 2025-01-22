import React from 'react';
import styled from 'styled-components';
import { Form_row } from '../../components/form_row.component';
import Input_field from '../../components/input_field.component';
import { get_any_input_validation } from '../../helpers/get_any_input_validation';
import { FormProvider, useForm } from 'react-hook-form';
import { make_options } from '../../helpers/make_options';
import Select_field from '../../components/select_field.component';
import { respond_to } from '../../helpers/breakpoints';
import { theme } from '../../styles/better_theme';

const BillingDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  .company_name,
  .country_name {
    grid-column: span 2;
  }

  .form_row {
    display: flex;
    gap: 1.5rem;
    grid-column: span 2;
  }

  ${respond_to('500')} {
    grid-template-columns: 1fr;
    width: 95%;
    margin-inline: auto;

    .company_name,
    .country_name {
      grid-column: span 1;
    }

    .form_row {
      grid-column: span 1;
      flex-direction: column;
    }
  }
`;

function BillingDetails() {
  const methods = useForm();

  let countries = [
    { id: 1, value: 'Kenya(KEN)' },
    { id: 2, value: 'South Africa(SA)' },
    { id: 3, value: 'Australia(AU)' },
    { id: 4, value: 'America(US)' },
  ];

  let cities = [
    {
      id: 1,
      value: 'New Jersey',
    },
    {
      id: 2,
      value: 'Boston(MA)',
    },
    {
      id: 1,
      value: 'New York',
    },
  ];

  const country_options = make_options(countries);
  const city_options = make_options(cities);
  console.log(country_options);
  const country_name_validation = {
    title: 'Country',
    // label: 'Country',
    id: 'country',
    options: country_options,
    validationRules: {
      required: {
        value: true,
        message: 'Country Name is required!',
      },
    },
  };

  const city_validation = {
    title: 'City',
    id: 'city',
    options: city_options,
    validationRules: {
      required: true,
      message: 'City is required!',
    },
  };
  const address_validation = get_any_input_validation('Address', 'text', true);
  const zip_code_validation = get_any_input_validation(
    'Zip Code',
    'number',
    true
  );
  const first_name_validation = get_any_input_validation(
    'First Name',
    'text',
    true
  );
  const last_name_validation = get_any_input_validation(
    'Last Name',
    'text',
    true
  );
  const phone_number_validation = get_any_input_validation(
    'Phone Number',
    'number',
    true
  );
  const email_address_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );
  const company_name_validation = get_any_input_validation(
    'Company Name',
    'text',
    true
  );

  return (
    <FormProvider {...methods}>
      <h3 className={`text-[${theme.colors.grey.h}] mb-10`}>Billing Details</h3>
      <BillingDetailsWrapper>
        <Form_row>
          <Input_field
            title="First Name"
            label="First Name"
            {...first_name_validation}
            layout="column"
          />
        </Form_row>
        <Form_row>
          <Input_field
            title="Last Name"
            label="Last Name"
            {...last_name_validation}
            layout="column"
          />
        </Form_row>
        <Form_row>
          <Input_field
            title="Phone Number"
            label="Phone Number"
            {...phone_number_validation}
            layout="column"
          />
        </Form_row>
        <Form_row>
          <Input_field
            title="Email Address"
            label="Email Address"
            {...email_address_validation}
            layout="column"
          />
        </Form_row>
        <Form_row other_class="company_name">
          <Input_field
            title="Company Name"
            label="Company Name"
            {...company_name_validation}
            layout="column"
          />
        </Form_row>
        <Form_row other_class="country_name">
          <Select_field
            title="Country Name"
            label="Country Name"
            {...country_name_validation}
            layout="column"
          />
        </Form_row>
        <div className="form_row">
          <Select_field
            title="City"
            label="City"
            {...city_validation}
            layout="column"
          />
          <Input_field
            title="Address"
            label="Address"
            {...address_validation}
          />
          <Input_field
            title="Zip code"
            label="ZIP Code"
            {...zip_code_validation}
          />
        </div>
        {/* <input type="radio" name="radio" id="radio" /> */}
        {/* <Input_field title='somn' type="radio"  /> */}
      </BillingDetailsWrapper>
    </FormProvider>
  );
}

export default BillingDetails;
