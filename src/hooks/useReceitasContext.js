import { useContext } from "react";
import { ReceitaContext } from "../context/ReceitaContext";

export function useReceitasContext() {
    const {receita, setReceita} = useContext(ReceitaContext);

    //Pegar dados
    function receitaSelecionada(dados) {
        console.log(dados);
       return setReceita(dados);
    }

    return (
        receita,
        setReceita,
        receitaSelecionada
    )
    
}