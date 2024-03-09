import styled from "styled-components";
import AsReceitas from "./AsReceitas";
import Seach from "../Seach";
import Tags from "../Tags";
import OffCanvas from "../OffCanvas/OffCanvas";

const ConteinerReceitas = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 64px;
  box-sizing: border-box;
  display: flex;

  gap: 20px;
  @media (max-width: 693px){
    flex-direction: column-reverse;
    padding: 0 32px;


  }
`;

const ReceitasConteiner = styled.section`
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 693px){
    width: 100%;
  }
`;

const GaleriaReceitas = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    @media (max-width: 693px){
    justify-content: center;
  }
`

const PesquisaConteiner = styled.aside`
  width: 100%;
  @media (max-width: 693px){
    justify-content: center;
    align-items: center;
    
  }
`

const Titulos = styled.h2`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 32px;
  font-style: normal;
  width: 100%;
  font-weight: 700;
  line-height: normal;
  text-align: start;
  &::before{
    content: '';
    width: 70%;
    border: 4px solid #869a81;
    display: block;
    border-radius: 10px;
  }
  @media (max-width: 693px) {
    text-align: center;
    &::before{
      content: '';
      width: 70%;
      border: 4px solid #869a81;
      display: block;
      margin: 6px auto;
      border-radius: 10px;
  }
  }
`

const Receitas = ({ receitinhas = [], setTag }) => {
  return (
    <ConteinerReceitas>
      <ReceitasConteiner>
        <Titulos>Melhores Receitas</Titulos>
        <GaleriaReceitas>
          {receitinhas.map(receitas => {
            return (
              <AsReceitas key={receitas.id} receitinhas={receitas} />
            )
          })}

        </GaleriaReceitas>
      </ReceitasConteiner>

      <PesquisaConteiner>
        <Titulos>Pesquisar</Titulos>
        <Seach />
        <Tags setTag={setTag} />
      </PesquisaConteiner>
      <OffCanvas />
    </ConteinerReceitas>
  );
};

export default Receitas;
