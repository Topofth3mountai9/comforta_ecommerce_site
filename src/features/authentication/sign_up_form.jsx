import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../ui/form';
import { Form_row } from '../../components/form_row.component';
import Input_field from '../../components/input_field.component';
import { get_any_input_validation } from '../../helpers/get_any_input_validation';

import styled from 'styled-components';
import { useSignUp } from './useSignUp';
import { useNavigate } from 'react-router-dom';
import { LoaderPinwheelIcon } from 'lucide-react';
import Loader_mini from '../../ui/loader_mini';

const Wrapper = styled.div`
  .action_btns {
    align-self: flex-end;
  }
`;

function SignUpForm() {
  const methods = useForm({
    // defaultValues: {
    // full_name: 'Some Name',
    // email_address: 'somemail@protonmail.co',
    // password: 12345678,
    // password_confirm: 12345678,
    // },
  });
  const { sign_up_mutation, is_signing_up } = useSignUp();
  const navigate = useNavigate();
  const { handleSubmit, getValues, reset } = methods;

  function handle_submit(data) {
    console.log(data);
    const { full_name, email_address, password } = data;
    sign_up_mutation(
      {
        full_name,
        email_address,
        password,
      },
      {
        onSuccess: () => navigate('/login'),
        onSettled: () => reset(),
      }
    );
  }

  const full_name_validation = get_any_input_validation(
    'Full Name',
    'text',
    true
  );
  // console.log(full_name_validation);

  let email_validation = {
    type: 'text',
    id: 'email_address',
    placeholder: 'Enter Email Address',
    validationRules: {
      required: {
        value: true,
        message: 'Email Address is required! ',
      },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Please provide a valid email address',
      },
    },
  };

  let password_validation = {
    type: 'password',
    id: 'password',
    placeholder: 'Enter Password',
    validationRules: {
      required: {
        value: true,
        message: 'This field is required!',
      },
      minLength: {
        value: 8,
        message: 'Password needs a minimum of 8 characters!',
      },
    },
  };

  let password_confirm_validation = {
    type: 'password',
    id: 'password_confirm',
    placeholder: 'Confirm password',
    validationRules: {
      required: {
        value: true,
        message: 'This field is required!',
      },
      validate: (value) =>
        value === getValues().password || 'Passwords need to match',
    },
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(handle_submit)}>
        <Wrapper className="flex_items flex_column g_2">
          <Form_row>
            <Input_field
              title="Full Name"
              label="Full Name"
              is_working={is_signing_up}
              {...full_name_validation}
              layout="column"
            />
          </Form_row>
          <Form_row>
            <Input_field
              title="Email Address"
              label="Email Address"
              is_working={is_signing_up}
              {...email_validation}
              layout="column"
            />
          </Form_row>
          <Form_row>
            <Input_field
              title="Password"
              label="Password"
              is_working={is_signing_up}
              {...password_validation}
              layout="column"
            />
          </Form_row>
          <Form_row>
            <Input_field
              title="Confirm Password"
              label="Confirm Password"
              is_working={is_signing_up}
              {...password_confirm_validation}
              layout="column"
            />
          </Form_row>
          <div className="action_btns flex_items g_1">
            <button
              className="btn btn-outline btn-pr btn-lg mt-6"
              type="reset"
              disabled={is_signing_up}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-lg mt-6"
              disabled={is_signing_up}
              type="submit"
            >
              {/* Sign up */}
              {is_signing_up ? <Loader_mini /> : 'Sign up'}
            </button>
          </div>
        </Wrapper>
      </Form>
    </FormProvider>
  );
}

export default SignUpForm;
