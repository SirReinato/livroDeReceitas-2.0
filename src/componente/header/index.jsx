import styled from "styled-components";

const Banner = styled.header`
  width: 100%;
  height: 429px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #606c5d 99%, rgba(96, 108, 93, 0.5) 100%);

  @media (max-width: 431px){
    height: 240px;
  }
`;

const Imagem = styled.div`
  width: 667px;
  height: 365.548px;
  flex-shrink: 0;
  background: url('/header-emblema.png');


  @media (max-width: 431px){
    width: 350px;
    height: 192px;
    background: url('/header-mobile.png');

  }
`;

const Header = () => {
  
  return (
    <Banner>
      <Imagem ></Imagem>
    </Banner>
  );
};

export default Header;
