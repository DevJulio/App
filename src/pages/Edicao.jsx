import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MainImg from "../components/MainImg";
import api from "../services/api";
import { storage } from "../firebase";

function Edicao() {
  const history = useHistory();
  const goList = () => history.push("/List");
  const [obs, setObs] = useState(localStorage.getItem("oberervation"));
  const [description, setDescription] = useState(
    localStorage.getItem("description")
  );
  const [picture, setPicture] = useState(localStorage.getItem("imageRef"));
  const [url, setUrl] = useState(localStorage.getItem("imageRef"));

  const imgChange = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };
  const Atualizar = async () => {
    if (picture != localStorage.getItem("imageRef")) {
      const upload = storage.ref(`img/${picture.name}`).put(picture);

      upload.on(
        "stage_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("img")
            .child(picture.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              console.log(url);
              sendData();
            });
        }
      );
    } else {
      sendData();
    }
  };

  const sendData = async () => {
    const response = await api.put(`picture/${localStorage.getItem("id")}`, {
      oberervation: obs,
      description: description,
      imageRef: url,
    });
    alert(response.data);
    goList();
  };

  return (
    <Div>
      <ImgPosition>
        <MainImg />
      </ImgPosition>
      <Container>
        <RowDiv>
          <ColmunDiv>
            <Label>Foto atual:</Label>
            <Image src={url}></Image>
            <Label>Para alterar, selecione uma nova foto:</Label>
            <InputFile onChange={imgChange} type={"File"}></InputFile>
          </ColmunDiv>
        </RowDiv>
        <RowDiv>
          <ColmunDiv>
            <Label>Observação</Label>
            <TextArea
              onChange={(e) => {
                setObs(e.target.value);
              }}
            >
              {obs}
            </TextArea>
          </ColmunDiv>
        </RowDiv>
        <RowDiv>
          <ColmunDiv>
            <Label>Descrição</Label>
            <TextArea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            >
              {description}
            </TextArea>
          </ColmunDiv>
        </RowDiv>
        <RowDiv>
          <ColmunDiv>
            <Btn onClick={Atualizar}>Atualizar</Btn>
          </ColmunDiv>
        </RowDiv>
      </Container>
    </Div>
  );
}
export default Edicao;
const Image = styled.img`
  height: 221px;
  border-radius: 25px;
  align-self: center;
  margin-bottom: 2em;
`;

const Btn = styled.button`
  width: 10em;
  align-self: center;
  margin-bottom: 2em;
  height: 2em;
  border-radius: 25px;
  color: #1c75bb;
  font-size: xx-large;
  cursor: pointer;
`;

const Label = styled.h1`
  color: #1c75bb;
  font-weight: 100;
  font-family: -webkit-pictograph;
  text-align-last: left;
  display: flex;
  margin-left: 10px;
  place-content: center;
`;

const TextArea = styled.textarea`
  width: 24em;
  height: 15em;
  margin-bottom: 3em;
  align-self: center;
  font-weight: 500;
  font-family: -webkit-pictograph;
  text-align-last: left;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  flex-direction: column;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InputFile = styled.input`
  text-align-last: left;
  color: #1c75bb;
  font-weight: 100;
  font-family: -webkit-pictograph;
  margin-left: 10px;
  justify-content: center;
`;

const ColmunDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
`;
const Container = styled.div`
  text-align-last: center;
  width: 94%;
  height: 94%;
  display: flex;
  flex-direction: column;
  background-color: #d0d1d3;
  border-radius: 25px;
  place-self: center;
`;
const ImgPosition = styled.div`
  text-align-last: center;
  margin-left: -4em;
`;
