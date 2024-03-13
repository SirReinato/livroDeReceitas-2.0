import styled from "styled-components";
import ResetCss from "./componente/ResetCss";
import Header from "./componente/header";
import Receitas from "./componente/Receitas";

import receitinhas from "./receitinhas.json";

import { useEffect, useState } from "react";
import Info from "./componente/Info";
import Footer from "./componente/Footer";
import { DetalheReceitaProvider } from "./context/DetalheReceitaContext";

const BgGeralGradiente = styled.main`
  width: 100%;
  padding-top: 64px;

  background: linear-gradient(
    163deg,
    #f7e6c4 0%,
    rgba(247, 230, 196, 0.8) 66.12%
  );
`

function App() {

  // const [api,setApi] = useState([]);

  //  useEffect(() =>{
  //   fetch('http://localhost:3000/asReceitas')
  //   .then(dados => dados.json())
  //   .then(dados => setApi(dados))
  // }, [])



  const [asReceitas, setAsReceitas] = useState(receitinhas);

  // filtro por tag e array
  const [tag, setTag] = useState(0);
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const receitasFiltradas = receitinhas.filter((receitas) => {
      const filtroPorTag = !tag || receitas.tagId === tag;

      const seachFiltro = !filtro || receitas.nome.toLowerCase().includes(filtro.toLowerCase());

      return filtroPorTag && seachFiltro;
    });
    setAsReceitas(receitasFiltradas);
  }, [tag, filtro]);


  return (
      <DetalheReceitaProvider>
        <ResetCss />
        <Header />
        <BgGeralGradiente>
          <Receitas
            receitinhas={asReceitas}
            setTag={setTag}
            setFiltro={setFiltro}
          />
          <Info />
          <Footer />
        </BgGeralGradiente>
      </DetalheReceitaProvider>
  );
}

export default App;
