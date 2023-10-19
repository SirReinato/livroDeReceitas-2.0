import styled from "styled-components";
import ResetCss from "./componente/ResetCss";
import Header from "./componente/header";
import Receitas from "./componente/Receitas";

import receitinhas from "./receitinhas.json";

import { useEffect, useState } from "react";
import Info from "./componente/Info";

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
  const [asReceitas, setAsReceitas] = useState(receitinhas);

  // filtro por tag
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const receitasFiltradas = receitinhas.filter((receitas) => {
      const filtroPorTag = !tag || receitas.tagId === tag;

      return filtroPorTag;
    });
    setAsReceitas(receitasFiltradas);
  }, [tag]);

  return (
    <>
      <ResetCss />
      <Header />
      <BgGeralGradiente>
        <Receitas 
          receitinhas={asReceitas} 
          setTag={setTag} 
        />
        <Info/>
      </BgGeralGradiente>
    </>
  );
}

export default App;
