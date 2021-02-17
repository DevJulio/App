import logo from "../assets/img/logo.jpg";
import styled from "styled-components";
function MainImg() {
  return <Image src={logo}></Image>;
}

export default MainImg;
const Image = styled.img`
  margin-left: 4.5em;
  align-self: center;
  margin-top: 3em;
`;
