import React from 'react';
import './App.css';
import styled from "styled-components";
import {MainImg} from "./components/img.styled";
import myimg from "./img/myimg.svg";
import {Title} from "./components/titile.styled";
import {Description, DescriptionContainer} from "./components/description.styled";
import {ButtonContainer, StyledBtn} from "./components/buttons.styled";

function App() {
    return (
        <div className="App">
            <Box>
                    <MainImg src={myimg} alt="Image"/>
                <Title>Headline</Title>
                <DescriptionContainer>
                    <Description>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.
                    </Description>
                </DescriptionContainer>
                <ButtonContainer>
                    <StyledBtn primary>See more</StyledBtn>
                    <StyledBtn outlined>Save</StyledBtn>
                </ButtonContainer>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  padding: 10px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;