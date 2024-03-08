import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Cards = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 319px;

  border-radius: 10px;
  background: #606c5d;
  img {
    width: 100%;
    height: 296.09px;
    border-radius: 10px 10px 0 0 ;

    background-color: #2b3a27;
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
  }
  h4 {
    color: #fff4f4;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
  }
`;

const AsReceitas = ({ receitinhas }) => {
  return (
    <Cards>
      <img src={receitinhas.imagem} alt={receitinhas.nome} />

      <FigcaptionStilizado>
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
