import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { find_input_error } from '../helpers/find_input_error';
import { is_form_invalid } from '../helpers/is_form_invalid';
import { BookTypeIcon } from 'lucide-react';

const StyledInputFormRow = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  gap: 1.5rem;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
    align-items: center;
    display: flex;
  }

  .label {
    padding: 0;
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 600;
    /* text-transform: uppercase; */
    letter-spacing: 0.1rem;
    color: ${({ theme, background }) =>
      background ? theme.colors.grey[100] : theme.colors.grey.e};
    /* text-transform: ${({ type }) =>
      type === 'checkbox' || type === 'radio' ? 'lowercase' : 'uppercase'};
    letter-spacing: ${({ type }) =>
      type === 'checkbox' || type === 'radio' ? '.04rem' : '.2rem'}; */
    ${({ type }) =>
      type === 'checkbox' &&
      css`
        text-transform: lowercase;
        letter-spacing: normal;
        font-weight: 500;
      `}

    ${({ type }) =>
      type === 'radio' &&
      css`
        text-transform: lowercase;
        letter-spacing: normal;
        font-weight: 500;
      `};
  }

  .input-container {
    display: inline-flex;
    /* flex: 1; */
    order: ${({ type }) => (type === 'checkbox' || type === 'radio' ? -1 : 1)};
    /* order: ${({ type }) => {
      console.log(type);
      if (type === 'checked') return -1;
      else return 1;
    }}; */
    position: relative;
    /* background: ${({ background, theme }) =>
      background ? background : theme.colors.grey.input_bg}; */
  }

  .my_input {
    width: 100%;
    height: 4rem;
    /* background: ${(props) => {
      console.log(props);
    }} */
    background: ${({ background, type, theme }) =>
      type === 'checked' || type === 'radio'
        ? 'none'
        : background
        ? background
        : theme.colors.grey.input_bg};
    border-radius: ${({ theme }) => theme.border_radius.md};
    padding: 1rem 2rem;
    /* padding: ${({ type }) =>
      type === 'checkbox' || type === 'radio' ? 0 : '1rem 2rem'}; */
    color: ${({ background, theme }) =>
      background ? theme.colors.grey[0] : theme.colors.grey.g};
    border: none;

    &::placeholder {
      /* background: ${(props) => {
        console.log(props);
      }} */
      color: ${({ background, theme }) =>
        background ? theme.colors.grey[0] : theme.colors.grey.g};
      /* color: ${({ theme }) => theme.colors.grey[0]}; */
      font-size: ${({ theme }) => theme.typography.text.xs};
    }
  }

  .text_area {
    min-height: 8rem;
    resize: vertical;
  }

  .error_container {
    font-size: ${({ theme }) => theme.typography.text.xs};
    color: ${({ theme }) => theme.colors.error};
  }

  .send_btn_svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function Input_error({ message }) {
  return (
    <motion.span
      className="error_message flex_items align_middle g_1"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.span>
  );
}

function Input_field({
  id,
  label,
  type = 'text',
  placeholder,
  is_working,
  validationRules,
  text_area,
  other_class,
  svg,
  layout = 'column',
  background,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const input_error = find_input_error(errors, id);
  const is_invalid = is_form_invalid(input_error);

  return (
    <StyledInputFormRow
      className={`${layout} ${other_class}`}
      type={type}
      background={background}
    >
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="input-container">
        {text_area ? (
          <textarea
            id={id}
            disabled={is_working}
            className="my_input text_area"
            placeholder={placeholder}
            {...register(id, validationRules)}
          />
        ) : (
          <input
            type={type}
            id={id}
            className="my_input"
            disabled={is_working}
            placeholder={placeholder}
            {...register(id, validationRules)}
          />
        )}
        {svg && <div className="send_btn_svg">{svg}</div>}
      </div>
      <div className="error_container">
        <AnimatePresence mode="wait" initial={false}>
          {is_invalid && (
            <Input_error
              message={input_error.error.message}
              key={input_error.error.message}
            />
          )}
        </AnimatePresence>
      </div>
    </StyledInputFormRow>
  );
}

export default Input_field;
