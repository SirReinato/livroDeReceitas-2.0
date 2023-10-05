import styled from "styled-components";

const Banner = styled.header`
  width: 100%;
  height: 429px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #606c5d 0%, rgba(96, 108, 93, 0.5) 100%);
`;

const Imagem = styled.img`
  width: 667px;
  height: 365.548px;
  flex-shrink: 0;
`;

const Header = () => {
  return (
    <Banner>
      <Imagem src="/public/header-emblema.png" alt="logo do nosso site"/>
    </Banner>
  );
};

export default Header;
