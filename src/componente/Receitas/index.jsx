import styled from "styled-components";
import AsReceitas from "./AsReceitas";
import Seach from "../Seach";
import Tags from "../Tags";

const ConteinerReceitas = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;

  gap: 20px;
`;

const ReceitasConteiner = styled.section`
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GaleriaReceitas = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
`

const PesquisaConteiner = styled.aside`
  width: 319px;

`

const Titulos = styled.h2`
  color: #293725;
  font-family: Koh Santepheap;
  font-size: 32px;
  font-style: normal;
  width: 80%;
  font-weight: 700;
  line-height: normal;

  border-top: 6px solid #869a81;
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
    </ConteinerReceitas>
  );
};

export default Receitas;
