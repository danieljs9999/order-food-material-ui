import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

function TotalAmount({ prise, onOrder, onClose }) {
  const orderButton =
    prise > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrise = prise.toFixed(2);

  return (
    <div>
      <InfoConteiner>
        <Label>Total Amount</Label>
        <Prise>${fixedPrise}</Prise>
      </InfoConteiner>
      <ActionButtonConteiner>
        <Button variants="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonConteiner>
    </div>
  );
}

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
`;

const Prise = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;

const InfoConteiner = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ActionButtonConteiner = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
