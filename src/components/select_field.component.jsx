import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import styled from 'styled-components';
import { find_input_error } from '../helpers/find_input_error';
import { is_form_invalid } from '../helpers/is_form_invalid';

const StyledInputFormRow = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
    align-items: center;
  }

  .label {
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 600;
    /* text-transform: uppercase; */
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.grey.e};
  }

  .select_container {
    flex: 1;
    position: relative;
    /* background: ${(props) => {
      console.log(props);
    }}; */
    background: ${({ background, theme }) =>
      background ? background : theme.colors.grey.input_bg};
    font: inherit;
  }

  .my_input {
    width: 100%;
    height: 4rem;
    background: ${({ theme }) => theme.colors.light_secondary};
    border-radius: ${({ theme }) => theme.border_radius.md};
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.grey.g};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey.g};
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
    <motion.span className="error_message" {...framer_error}>
      <MdError />
      {message}
    </motion.span>
  );
}

function Select_field({
  id,
  title,
  label,
  is_working,
  options,
  validationRules,
  className,
  background,
  layout = 'column',
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const input_error = find_input_error(errors, id);
  const is_invalid = is_form_invalid(input_error);

  return (
    <StyledInputFormRow
      className={`${layout} ${className}`}
      background={background}
    >
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <select
        name=""
        id={id}
        disabled={is_working}
        className="select_container"
        {...register(id, validationRules)}
      >
        <option value="">Select {title}</option>
        {options.map((option) => {
          // if (value === option.value) selected = 'selected';
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
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

export default Select_field;
