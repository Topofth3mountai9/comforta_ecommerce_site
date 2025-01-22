import React from 'react';
import BillingDetails from './billing_details';
import HowToPay from './how_to_pay';
import styled from 'styled-components';

const AllForms = styled.div``;

function Checkout_form() {
  return (
    <AllForms>
      <BillingDetails />
      <HowToPay />
    </AllForms>
  );
}

export default Checkout_form;
