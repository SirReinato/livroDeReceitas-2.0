import styled from "styled-components";

const InfoStyles = styled.section`
  display: flex;
  width: 100%;
  padding: 60px 0;
  margin-top: 64px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  background: #869a81;
`;

const ConteinerMensagemLivro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 535px;
  box-sizing: border-box;
  padding-top: 20px;
  flex-shrink: 0;
  background: url("/livro.png") no-repeat center;

  @media (max-width: 431px){
    height: 320px;

    background: url("/livro-mbile.png") no-repeat center;
  }

  .livroReceitas1 {
    width: 217px;
    padding: 64px 42px 0 45px;
    text-align: center;
    flex-shrink: 0;
    box-sizing: border-box;

    @media (max-width: 431px){
    width: 160px;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 32px;

  }

    h3 {
      color: #293725;
      font-family: Jacques Francois;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 222.222% */
      text-transform: capitalize;
      margin-bottom: 32px;

      @media (max-width: 431px){
        font-size: 16px;
        margin-right: 40px;
        width: 150px;


      }
    }
    p {
      color: #293725;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 200% */
      text-transform: capitalize;

      @media (max-width: 431px){
        font-size: 8px;
        width: 140px;

      }
    }
  }

  .livroReceitas2{
    width: 217px;
    height: 184px;
    padding: 64px 42px 0 45px;
    text-align: center;
    flex-shrink: 0;
    box-sizing: border-box;

    @media (max-width: 431px){
      width: 160px;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0px 64px 0px 0px;
    margin-right: 32px;

  }

    h3 {
      color: #293725;
      font-family: Jacques Francois;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 222.222% */
      text-transform: capitalize;
      margin-bottom: 32px;

      @media (max-width: 431px){
        font-size: 16px;
        margin-right: 40px;
        width: 150px;


      }
    }
    p {
      color: #293725;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 200% */
      text-transform: capitalize;

      @media (max-width: 431px){
        font-size: 8px;
        width: 140px;

      }
    }
  }
`;

const Info = () => {
  return (
    <InfoStyles>
      <ConteinerMensagemLivro>
        <div className="livroReceitas1">
          <h3>RECEITAS FÁCEIS</h3>
          <p>
            Você gosta de cozinhar, mas não tem muito tempo ou paciência para
            seguir receitas complicadas? Você quer preparar pratos deliciosos,
            saudáveis e econômicos para você e sua família? Então você veio ao
            lugar certo!
          </p>
        </div>
        <div className="livroReceitas2">
          <p>
            {" "}
            Neste site, você vai encontrar receitas fáceis e rápidas que levam
            poucos ingredientes e são feitas em menos de 30 minutos. são
            receitas para todos os gostos e ocasiões, desde saladas e sopas até
            massas e carnes. Você também vai aprender dicas e truques para
            facilitar o seu dia a dia na cozinha e aproveitar melhor os
            alimentos.{" "}
          </p>
        </div>
      </ConteinerMensagemLivro>
    </InfoStyles>
  );
};

export default Info;
