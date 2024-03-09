import styled from "styled-components";
import InputNovidades from "./InputNovidades";

const FooterStylosConteiner = styled.footer`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 32px 35px;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;

  background: linear-gradient(
    0deg,
    #606c5d 85.68%,
    rgba(96, 108, 93, 0.5) 100.19%
  );
  @media (max-width: 693px){
    flex-direction: column;
    gap: 16px;
  }
`;

const NovidadesConteiner = styled.div`
  width: 336.685px;
  height: 97px;
  color: #f1c376;
  h4 {
    color: #f1c376;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 16px;
  }
  
  @media (max-width: 693px){
    display: none;
  }
`;

const Logo = styled.figure`
  display: flex;
  width: 270.624px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  figcaption {
    color: #f1c376;
    font-family: Jacques Francois;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RedesSociais = styled.figure`
  display: flex;
  width: 282.608px;
  align-items: flex-start;
  gap: 20px;
`;

const BySirReinato = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;

  background-color: #F1C376;
  .bySirReinato{
    font-size: 16px;
    letter-spacing: .1em;
    font-weight: bold;
  }
`

const Footer = () => {
  return (
    <>

      <FooterStylosConteiner>
        <NovidadesConteiner>
          <h4>Novidades</h4>
          <InputNovidades />
        </NovidadesConteiner>
        <Logo>
          <figcaption>“Livro de Receitas”</figcaption>
          <img src="fogão.png" alt="fogão logo do site" />
        </Logo>
        <RedesSociais>
          <a href="https://github.com/SirReinato" target="_blank" rel="noopener noreferrer"> <img src="githib.png" alt="logo do github" /> </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"> <img src="linkedin.png" alt="logo do linkedin" /> </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"> <img src="twitter.png" alt="logo do twitter" /> </a>

        </RedesSociais>

      </FooterStylosConteiner>
      <BySirReinato>
        <p className="bySirReinato">@By_SirReinato</p>
      </BySirReinato>
    </>
  );
};

export default Footer;
