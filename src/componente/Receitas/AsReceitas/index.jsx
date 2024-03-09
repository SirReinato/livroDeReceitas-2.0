import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import { ReceitaContext } from "../../../context/ReceitaContext";

const Cards = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;

  border-radius: 10px;
  background: #606c5d;

  @media (max-width: 430px){
    justify-content: start;
    width: 164px;

  }
  img {
    width: 100%;
    height: 240px;
    border-radius: 10px 10px 0 0 ;

    background-color: #2b3a27;

    @media (max-width: 430px){
      height: 140.09px;
    }
  }
`;

const FigcaptionStilizado = styled.figcaption`
  width: 300px;
  padding: 5px 10px;
  box-sizing: border-box ;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  @media (max-width: 430px){
    width: 100%;

    }
  h3 {
    color: #fff4f4;
    text-align: center;
    font-family: Jacques Francois;
    font-size: 22px;
    font-style: normal;
    margin-bottom: 25px;
    font-weight: 400;
    line-height: 30px; /* 142.857% */
    text-transform: capitalize;
    @media (max-width: 430px){
    margin-bottom: 16px;
      font-size: 16px;
    }
  }
  h4 {
    color: #fff4f4;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
    @media (max-width: 430px){
      font-size: 12px;
    }
  }
`;

const AsReceitas = ({ receitinhas }) => {
  const { setReceita } = useContext(ReceitaContext)
  return (
    <Cards>
      <img src={receitinhas.imagem} alt={receitinhas.nome} />

      <FigcaptionStilizado
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onClick={() => setReceita(receitinhas)}
      >
        <h3>{receitinhas.nome}</h3>
        <h4>
          Dificuldade: <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
          <AiOutlineStar /> <AiOutlineStar />
        </h4>
      </FigcaptionStilizado>
    </Cards>
  );
};

export default AsReceitas;
