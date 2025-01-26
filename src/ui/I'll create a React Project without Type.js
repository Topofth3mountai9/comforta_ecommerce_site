I'll create a React Project without TypeScript, using JavaScript instead. I'll modify the previous example to remove all TypeScript-specific syntax.

```typescriptreact project="CustomInputsJS"
...
```

This implementation adapts the provided `Input_field` component to work with checkbox and radio inputs, using JavaScript instead of TypeScript. The main changes include:

1. Removing all TypeScript-specific syntax and type annotations.
2. Keeping the styling and functionality the same as in the previous example.
3. Using the `Input_field` component for text inputs, checkboxes, and radio buttons.


The component handles different layouts and styling based on the input type. You can now use this `Input_field` component in your JavaScript React project for various input types, including checkboxes and radio buttons.


import React from "react"
import { useFormContext } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"
import { MdError } from "react-icons/md"
import styled, { css } from "styled-components"
import { find_input_error } from "../helpers/find_input_error"
import { is_form_invalid } from "../helpers/is_form_invalid"

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
    padding: 0;
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: 600;
    color: ${({ theme, background }) => (background ? theme.colors.grey[100] : theme.colors.grey.e)};
    
    ${({ type }) =>
      (type === "checkbox" || type === "radio") &&
      css`
        text-transform: lowercase;
        letter-spacing: normal;
        font-weight: 500;
      `};
  }

  .input-container {
    display: inline-flex;
    position: relative;
    order: ${({ type }) => (type === "checkbox" || type === "radio" ? -1 : 1)};
  }

  .my_input {
    width: 100%;
    height: ${({ type }) => (type === "checkbox" || type === "radio" ? "auto" : "4rem")};
    background: ${({ background, type, theme }) =>
      type === "checkbox" || type === "radio" ? "none" : background ? background : theme.colors.grey.input_bg};
    border-radius: ${({ theme }) => theme.border_radius.md};
    padding: ${({ type }) => (type === "checkbox" || type === "radio" ? "0" : "1rem 2rem")};
    color: ${({ background, theme }) => (background ? theme.colors.grey[0] : theme.colors.grey.g)};
    border: none;

    &::placeholder {
      color: ${({ background, theme }) => (background ? theme.colors.grey[0] : theme.colors.grey.g)};
      font-size: ${({ theme }) => theme.typography.text.xs};
    }
  }

  .error_container {
    font-size: ${({ theme }) => theme.typography.text.xs};
    color: ${({ theme }) => theme.colors.error};
  }
`

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

function Input_error({ message }) {
  return (
    <motion.span className="error_message flex_items align_middle g_1" {...framer_error}>
      <MdError />
      {message}
    </motion.span>
  )
}

function Input_field({
  id,
  label,
  type = "text",
  placeholder,
  is_working,
  validationRules,
  layout = "column",
  background,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const input_error = find_input_error(errors, id)
  const is_invalid = is_form_invalid(input_error)

  return (
    <StyledInputFormRow className={layout} type={type} background={background}>
      <div className="input-container">
        <input
          type={type}
          id={id}
          className="my_input"
          disabled={is_working}
          placeholder={placeholder}
          {...register(id, validationRules)}
        />
      </div>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="error_container">
        <AnimatePresence mode="wait" initial={false}>
          {is_invalid && <Input_error message={input_error.error.message} key={input_error.error.message} />}
        </AnimatePresence>
      </div>
    </StyledInputFormRow>
  )
}

export default Input_field



import React from "react"
import { useForm, FormProvider } from "react-hook-form"
import Input_field from "./Input_field"

export default function FormExample() {
  const methods = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <Input_field
          id="agree"
          type="checkbox"
          label="I agree to the terms and conditions"
          layout="row"
          validationRules={{ required: "You must agree to the terms" }}
        />

        <div>
          <p className="mb-2">Select your preferred contact method:</p>
          <Input_field
            id="contact"
            type="radio"
            label="Email"
            layout="row"
            validationRules={{ required: "Please select a contact method" }}
          />
          <Input_field
            id="contact"
            type="radio"
            label="Phone"
            layout="row"
            validationRules={{ required: "Please select a contact method" }}
          />
          <Input_field
            id="contact"
            type="radio"
            label="Mail"
            layout="row"
            validationRules={{ required: "Please select a contact method" }}
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </FormProvider>
  )
}























`<ReactProject id="responsive-cart">`Let's update the table components to be responsive:

```javascriptreact file="ui/table.jsx"
...
```

Now let's update the CartTable component to add data labels for mobile view:

```javascriptreact
import React from 'react';
import Table from '../ui/table';
import { useCartContext } from '../context/CartContext';
import CartRow from './cart_row.component';

function CartTable() {
  const { cart } = useCartContext();
  return (
    <Table columns="1.1fr 0.8fr 0.8fr 0.8fr 0.5fr">
      <Table.Header>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cart}
        render={(individual_item) => (
          <CartRow key={individual_item.id} cart_item_info={individual_item} />
        )}
      />
    </Table>
  );
}

export default CartTable;
```

Finally, let's update the CartRow component with responsive styles:

```javascriptreact
import React from 'react';
import Table from '../ui/table';
import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';
import { format_currency } from '../helpers/format_currency';
import { Minus, Plus } from 'lucide-react';
import { useCartContext } from '../context/CartContext';

const Img = styled.img`
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);

  @media (max-width: 768px) {
    width: 8rem;
    transform: none;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 30%;

  @media (max-width: 768px) {
    width: auto;
    margin-left: auto;
  }

  button {
    background: none;
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
      background: #f5f5f5;
    }
  }

  .quantity {
    font-weight: 600;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 4rem;
  }
`;

const TableRowWrapper = styled.div`
  .img_name_and_color {
    @media (max-width: 768px) {
      width: 100%;
      justify-content: flex-start;
    }
  }

  .name {
    font-weight: 600;
    text-transform: capitalize;
  }

  .delete_btn {
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
    }

    @media (max-width: 768px) {
      margin-left: auto;
    }
  }

  .color_chosen {
    gap: 0.5rem;

    .color_item_text {
      color: ${({ theme }) => theme.colors.grey[400]};
    }
  }

  .color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  .price {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    .price, .sub_total {
      margin-left: auto;
    }
  }
`;

function CartRow({ cart_item_info }) {
  const { remove_item_from_cart, increase_item_count, decrease_item_count } =
    useCartContext();
  const {
    id,
    image,
    name,
    color_chosen,
    price,
    amount_of_items_chosen,
    sub_total,
  } = cart_item_info;

  return (
    <TableRowWrapper>
      <Table.Row>
        <div className="img_name_and_color flex_items g_1" data-label="">
          <Img src={image} alt={name} />
          <div className="name_and_color flex_items flex_column">
            <span className="name text_tiny">{name}</span>
            <div className="color_chosen flex_items align_middle">
              <span className="color_item_text">Color : </span>
              <div className="color" style={{ background: color_chosen }}></div>
            </div>
          </div>
        </div>
        <div data-label="Price">
          <span className="price text_tiny">{format_currency(price)}</span>
        </div>
        <div data-label="Quantity">
          <QuantitySelector>
            <button onClick={() => decrease_item_count(id, color_chosen)}>
              <Minus />
            </button>
            <div className="quantity flex_items align_middle align_horizontal text_small">
              {amount_of_items_chosen}
            </div>
            <button onClick={() => increase_item_count(id, color_chosen)}>
              <Plus />
            </button>
          </QuantitySelector>
        </div>
        <div data-label="Subtotal">
          <span className="sub_total text_tiny">
            {format_currency(price * amount_of_items_chosen)}
          </span>
        </div>
        <div data-label="">
          <div
            className="delete_btn"
            onClick={() => remove_item_from_cart(id, color_chosen)}
          >
            <HiOutlineTrash />
          </div>
        </div>
      </Table.Row>
    </TableRowWrapper>
  );
}

export default CartRow;
```

`</ReactProject>`The key changes made to make the table responsive include:

1. On mobile screens (< 768px):

1. Headers are hidden
2. Grid columns stack vertically
3. Each cell shows its label (except for the item and delete button)
4. Cells are formatted as label-value pairs
5. Spacing and padding are adjusted for better touch targets



2. Improvements to the layout:

1. Added proper data labels for mobile view
2. Adjusted image sizing and positioning
3. Made quantity controls more touch-friendly
4. Improved spacing and alignment
5. Maintained functionality across all screen sizes



3. The table now:

1. Shows as a traditional table on desktop
2. Transforms into a card-like layout on mobile
3. Maintains all functionality across screen sizes
4. Keeps content readable and accessible





These changes make the cart table fully responsive while maintaining its functionality and improving the user experience on mobile devices.