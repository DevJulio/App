import pencil from "../assets/img/pencil.png";
import list from "../assets/img/list.png";
import Card from "../components/Card";
import styled from "styled-components";
import MainImg from "../components/MainImg";
function Index() {
  return (
    <MainDiv>
      <MainImg />
      <CardDiv>
        <Card name={"Cadastro"} src={pencil} locate={"/Cadastro"}></Card>
      </CardDiv>
      <CardDiv>
        <Card name={"Detalhes e opções"} src={list} locate={"/List"}></Card>
      </CardDiv>
    </MainDiv>
  );
}

export default Index;

const MainDiv = styled.div`
  text-align-last: center;
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: -2em;
  flex: 3;
  flex-direction: column;
`;
const CardDiv = styled.div`
  display: flex;
  flex: 1;
`;
const AuxDiv = styled.div`
  display: flex;
  flex: 3;
`;
