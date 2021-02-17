import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainImg from "../components/MainImg";
import { useHistory } from "react-router-dom";
import api from "../services/api";

function List() {
  useEffect(() => {
    load();
  }, []);
  const [data, setData] = useState([]);
  const load = async () => {
    let a = await api.get("pictures/");
    setData(a.data);
  };

  const Del = async () => {
    const response = await api.delete(`picture/${localStorage.getItem("id")}`);
    alert(response.data);
    window.location.reload();
  };

  const history = useHistory();
  const goForm = () => history.push("/Cadastro");
  const goEdit = () => history.push("/Edicao");
  return (
    <Div>
      <ImgPosition>
        <MainImg />
      </ImgPosition>
      <BtnDiv>
        <Btn onClick={goForm}>Cadastrar</Btn>
      </BtnDiv>
      {data.map((item) => (
        <MainCard>
          <Label>Código: {item.code}</Label>
          <Image src={item.imageRef}></Image>
          <Label>Descrição</Label>
          <Span>{item.description}</Span>
          <Label>Observação</Label>
          <Span>{item.oberervation}</Span>
          <RowDiv>
            <Btn
              onClick={() => {
                localStorage.setItem("codigo", item.code);
                localStorage.setItem("imageRef", item.imageRef);
                localStorage.setItem("description", item.description);
                localStorage.setItem("oberervation", item.oberervation);
                localStorage.setItem("id", item.id);
                goEdit();
              }}
            >
              Editar
            </Btn>
            <Btn
              onClick={() => {
                localStorage.setItem("id", item.id);
                Del();
              }}
            >
              Excluir
            </Btn>
          </RowDiv>
        </MainCard>
      ))}
    </Div>
  );
}
export default List;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const BtnDiv = styled.div`
  width: 11em;
  place-self: center;
  margin-bottom: -5em;
`;
const Span = styled.span`
  color: white;
  font-family: -webkit-pictograph;
  text-align-last: left;
  margin-top: 1em;
  margin-left: 7px;
`;
const Label = styled.h1`
  color: #fff;
  font-weight: 100;
  height: 10px;
  font-family: -webkit-pictograph;
  text-align-last: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 18px;
`;
const Btn = styled.button`
  width: 5em;
  align-self: center;
  margin-bottom: 2em;
  height: 2em;
  border-radius: 25px;
  color: #1c75bb;
  margin-right: 0.5em;
  font-size: xx-large;
  cursor: pointer;
  margin-top: 1em;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  flex-direction: column;
`;

const ImgPosition = styled.div`
  text-align-last: center;
  margin-left: -4em;
`;

const MainCard = styled.div`
  text-align-last: center;
  align-self: center;
  width: 23em;
  height: 45em;
  display: flex;
  flex-direction: column;
  background-color: #1c75bb;
  border-radius: 25px;
  margin-top: 3em;
`;
const Image = styled.img`
  height: 221px;
  border-radius: 25px;
  align-self: center;
  margin-top: 1em;
`;
