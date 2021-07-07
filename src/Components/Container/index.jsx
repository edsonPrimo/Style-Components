import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato"

const ContainerWrapper = styled.div`
  background-color: ${({theme}) => theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.texto};
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    </ContainerWrapper>
  );
};

export default Container;
