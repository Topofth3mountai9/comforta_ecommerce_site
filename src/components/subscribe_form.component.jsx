import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { get_any_input_validation } from '../helpers/get_any_input_validation';
import Input_field from './input_field.component';
import { theme } from '../styles/theme';
import styled from 'styled-components';
import Form from '../ui/form';
import FormRow from '../ui/FormRow.component';
import Input from '../ui/Input';

const Subscribe_Form_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const email_address_validation_ = get_any_input_validation(
  'Email Address',
  'text',
  true
);
console.log(email_address_validation_);

const email_address_validation = {
  type: 'email',
  id: 'email_address',
  placeholder: 'Enter Email address',
  validationRules: {
    required: {
      value: true,
      message: 'Email address is required!',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Please provide a valid email address!',
    },
  },
};

function Subscribe_form() {
  const methods = useForm();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  function handle_submit(data) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <Subscribe_Form_Container>
        <form
          onSubmit={handleSubmit(handle_submit)}
          className="form flex_items align_middle g_"
        >
          <FormRow error={errors?.email_address?.message}>
            <Input
              type="text"
              id="email_address"
              placeholder="Enter your email address"
              style={{
                background: theme.colors.secondary,
                border: 'none',
                color: theme.colors.grey[100],
              }}
              {...register('email_address', {
                required: {
                  value: true,
                  message: 'Email Address is required!',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address!',
                },
              })}
            />
          </FormRow>
          <button className="btn btn-lg btn-secondary ml-8">subscribe</button>
        </form>
        {/* <form
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
        </form> */}
      </Subscribe_Form_Container>
    </FormProvider>
  );
}

export default Subscribe_form;
