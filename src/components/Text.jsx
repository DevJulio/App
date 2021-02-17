import React, { memo } from "react";
import styled from "styled-components";
import logo from "../assets/img/warehouse.jpg";

function Text(props) {
  return <Label>{props.name}</Label>;
}
export default Text;

const Label = styled.h1`
  color: white;
  font-weight: 100;
  font-family: -webkit-pictograph;
`;

//#d0d1d3
//#1c75bb
