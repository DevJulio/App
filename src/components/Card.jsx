import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { useHistory } from "react-router-dom";
function Card(props) {
  const history = useHistory();
  const goForm = () => history.push(props.locate);

  return (
    <Div>
      <MainCard>
        <Text name={props.name}></Text>
        <Image src={props.src}></Image>
        <Btn onClick={goForm}> Acessar</Btn>
      </MainCard>
    </Div>
  );
}
export default Card;
const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
`;
const MainCard = styled.div`
  text-align-last: center;
  width: 28em;
  height: 28em;
  display: flex;
  flex-direction: column;
  background-color: #1c75bb;
  border-radius: 25px;
  margin-left: 4.5em;
  margin-top: 3em;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-top: 3em;
`;
const Btn = styled.button`
  width: 80%;
  align-self: center;
  margin-top: 2em;
  height: 2em;
  border-radius: 25px;
  color: #818284;
  font-size: xx-large;
  cursor: pointer;
`;
