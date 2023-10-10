import styled from "styled-components";
import ResetCss from "./componente/ResetCss";
import Header from "./componente/header";
import Receitas from "./componente/Receitas";

import tags from "./tags.json";

import receitinhas from "./receitinhas.json";
import { useState } from "react";


const BgGeralGradiente = styled.div`
  width: 100%;
  padding: 64px 0;
  
  background: linear-gradient(
    163deg,
    #f7e6c4 0%,
    rgba(247, 230, 196, 0.8) 66.12%
    );
`;



function App() {

  const [asTags, setAsTags] = useState(tags);
  const [asReceitas, setAsReceitas] = useState(receitinhas);
  return (
    <>
      <ResetCss />
      <Header />
      <BgGeralGradiente>
        <Receitas receitinhas={asReceitas} tags={asTags}/>
      </BgGeralGradiente>
    </>
  );
}

export default App;
