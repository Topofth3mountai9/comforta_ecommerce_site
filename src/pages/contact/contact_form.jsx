import { FormProvider, useForm } from 'react-hook-form';

import { get_any_input_validation } from '../../helpers/get_any_input_validation';
import { Form_row } from '../../components/form_row.component';
import Input_field from '../../components/input_field.component';
import styled from 'styled-components';
import { respond_to } from '../../helpers/breakpoints';
import { theme } from '../../styles/better_theme';

const ContactFormContainer = styled.form`
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  column-gap: 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  padding-block: 4rem;

  .subject,
  .message,
  .send_message_btn {
    grid-column: 1/ -1;
  }

  .common,
  .message {
    margin-inline: 4rem;

    @media all and (width >= 500px) {
      /* margin-inline: 8rem; */
      margin-inline: 4rem;
    }
    ${respond_to('768')} {
      margin-inline: 4rem;
    }

    @media all and (width > 1200px) {
      margin-inline: 8rem;
    }
  }

  .message {
    /* margin-inline: 9rem; */
  }
  .send_message_btn {
    /* width: 66%; */
    /* margin-inline: auto; */
  }

  label {
    color: ${({ theme }) => theme.colors.grey[300]};
  }

  textarea {
    height: 10rem;
    background: ${({ theme }) => theme.colors.light_secondary};
    border: none;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0;
    /* color: #9ca3af; */
  }
  //responsive
  ${respond_to('1000')} {
    .contact_form_container {
      grid-template-columns: 1fr;
    }
  }
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.grey[100]};
`;

function ContactForm() {
  const methods = useForm();
  const { handleSubmit } = methods;

  // const handle_submit = (data) => console.log(data);

  function handle_submit(data) {
    console.log(data);
  }

  const full_name_validation = get_any_input_validation(
    'Full Name',
    'text',
    true
  );
  const subject_validation = get_any_input_validation(
    'Your Subject',
    'text',
    true
  );
  const phone_number_validation = get_any_input_validation(
    'Your Phone Number',
    'number',
    true
  );
  const message_validation = get_any_input_validation(
    'Your Message',
    'text',
    true
  );
  const email_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );

  // const {handleSubmit, }
  return (
    <FormProvider {...methods}>
      <ContactFormContainer
        className={`contact_form_container grid g_2`}
        onSubmit={handleSubmit(handle_submit)}
      >
        <Header className="text_center mb_24">
          <h2 className="mb-4">Send us a message</h2>
          <p>Your email address will not be published.</p>
        </Header>
        {/* <form > */}
        <Form_row center={true} other_class={`common`}>
          <Input_field
            title="Full_name"
            label="Full Name"
            background={theme.colors.brand_secondary_light[800]}
            {...full_name_validation}
          />
        </Form_row>
        <Form_row center={true} other_class={`common`}>
          <Input_field
            title="Email Address"
            label="Email Address"
            background={theme.colors.brand_secondary_light[800]}
            {...email_validation}
          />
        </Form_row>
        <Form_row center={true} other_class={`subject common`}>
          <Input_field
            title="Your Subject"
            label="Your Subject"
            background={theme.colors.brand_secondary_light[800]}
            {...subject_validation}
            center={true}
          />
        </Form_row>
        <Form_row center={true} other_class={`phone common`}>
          <Input_field
            title="Your Phone Number"
            label="Your Phone Number"
            background={theme.colors.brand_secondary_light[800]}
            {...phone_number_validation}
          />
        </Form_row>
        <Form_row center={true} other_class={`message`} className="message">
          <Input_field
            title="Your Message"
            label="Your Message"
            background={theme.colors.brand_secondary_light[800]}
            text_area={true}
            {...message_validation}
          />
        </Form_row>
        <button className="send_message_btn btn btn-secondary btn-lg mt-2 common">
          send message
        </button>
        {/* </form> */}
      </ContactFormContainer>
    </FormProvider>
  );
}

export default ContactForm;
