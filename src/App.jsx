import styled from "styled-components";
import ResetCss from "./componente/ResetCss";
import Header from "./componente/header";

const BgGeralGradiente = styled.body`
  width: 100%;
  padding: 64px 0;

  background: linear-gradient(
    163deg,
    #f7e6c4 0%,
    rgba(247, 230, 196, 0.8) 66.12%
  );
`;

const ConteinerReceitas = styled.main`
  width: 1336px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`

function App() {
  return (
    <>
      <ResetCss />
      <Header />
      <BgGeralGradiente>
        <ConteinerReceitas>
          
        </ConteinerReceitas>
      </BgGeralGradiente>
    </>
  );
}

export default App;
