import React, { memo } from "react";
import styled from "styled-components";
import logo from "../assets/img/warehouse.jpg";

function Input(props) {
  return (
    <>
      <Div>
        <TextInput
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          type={"text"}
          value={props.value}
        ></TextInput>
      </Div>
    </>
  );
}
export default Input;

const TextInput = styled.input`
  font-size: xx-large;
  width: 10em;
  text-align-last: left;
  place-self: center;
`;

const Div = styled.div`
  place-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
