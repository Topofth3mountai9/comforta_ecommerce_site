import { useFormContext } from 'react-hook-form';
// import styles from './input_field.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
// import { find_input_error } from '../../helpers/find_input_error';
import { find_input_error } from '../helpers/find_input_error';
import { is_form_invalid } from '../helpers/is_form_invalid';
import styled from 'styled-components';
// import { useLocation, useParams } from 'react-router-dom';

let input_background = {
  light: { background: '#fff' },
  dark: { background: '' },
};

const StyledInputFormRow = styled.div`
  width: 100%;
  gap: 1.5rem;

  .label {
    font-size: 1.4rem;
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 600;
    justify-self: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    &:first-child {
      justify-self: start;
    }

    &:last-child {
      justify-self: end;
    }
  }

  .text_area {
    margin-top: 1.5rem;
  }

  .input {
    justify-self: end;
  }
  .my_input {
    width: 35rem;
    height: 4rem;
    background: ${({ theme }) => theme.colors.light_secondary};
    border-radius: ${({ theme }) => theme.border_radius.md};
    padding: 2rem;
    color: ${({ theme }) => theme.colors.grey[0]};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[0]};
      font-size: ${({ theme }) => theme.typography.text.xs};
    }
  }

  .send_btn_svg {
    position: absolute;
    right: 0;
    top: 1.2rem;
    transform: translateY(-50%);
  }
`;

function Input_error({ message }) {
  return (
    <motion.span
      className="error_message flex_items align_middle"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.span>
  );
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function Input_field({
  id,
  title,
  type,
  background,
  label = false,
  placeholder,
  is_working,
  validationRules,
  text_area,
  other_class,
  className,
  svg,
}) {
  let input_styles = {};
  //read the url so that you can appropriately show the form
  // let { pathname } = useLocation();
  // if (pathname.includes('general'))
  //   input_styles = { gridTemplateColumns: '10rem 1fr auto 1fr' };
  //make the default type text

  const input_type = type ? type : 'text';
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // console.log(`Errors`, errors);

  const input_error = find_input_error(errors, id);
  const is_invalid = is_form_invalid(input_error);

  return (
    <StyledInputFormRow
      className={`input_form_row flex_item flex_column align_middle align_horizontal g_2 position_relative ${className}`}
      style={input_styles}
    >
      {label && (
        <label htmlFor={id} className="label">
          {label || title}
        </label>
      )}
      <div className="error_container flex_items">
        <AnimatePresence mode="wait" initial={false}>
          {is_invalid && (
            <Input_error
              message={input_error.error.message}
              key={input_error.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {text_area ? (
        <textarea
          type={type}
          id={id}
          disabled={is_working}
          className={`text_area ${other_class}`}
          placeholder={placeholder}
          {...register(`${id}`, validationRules)}
        ></textarea>
      ) : (
        <input
          type={input_type}
          id={id}
          // className={`${styles.input} ${other_class}`}
          className={`my_input ${other_class}`}
          style={{ background: background }}
          disabled={is_working}
          placeholder={placeholder}
          // value={value}
          {...register(id, validationRules)}
        />
      )}
      {svg && <div className="send_btn_svg">{svg}</div>}
      {/* <Error_message error={errors[id]} /> */}
      {/* {errors.id && errors.id.type === 'required' && (
            <span>
              <small>{`${title} is required`}</small>
            </span>
          )} */}
    </StyledInputFormRow>
  );
}

export default Input_field;
