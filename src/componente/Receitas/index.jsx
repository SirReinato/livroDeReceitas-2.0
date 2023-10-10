import styled from "styled-components";
import AsReceitas from "./AsReceitas";
import Seach from "../Seach";
import Tags from "../Tags";

const ConteinerReceitas = styled.main`
  width: 1336px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;

const ReceitasConteiner = styled.section`
  width: 997px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GaleriaReceitas = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 64px;
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
`;

const Receitas = ({receitinhas = [], tags}) => {
  return (
    <ConteinerReceitas>
      <ReceitasConteiner>
        <Titulos>Melhores Receitas</Titulos>
        <GaleriaReceitas>
          {receitinhas.map(receitas => {
            return(
              <AsReceitas key={receitas.id} receitinhas={receitas}/>
            )
          })}
            
        </GaleriaReceitas>
      </ReceitasConteiner>
      <PesquisaConteiner>
        <Titulos>Pesquisar</Titulos>
        <Seach/>
        <Tags tags={tags}/>
      </PesquisaConteiner>
    </ConteinerReceitas>
  );
};

export default Receitas;
