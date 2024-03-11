import { createContext, useState } from "react";

export const DetalheReceitaContext = createContext();
DetalheReceitaContext.displayName = "Receita";

export const DetalheReceitaProvider = ({children}) =>{
    const [receita, setReceita] = useState([]);

    return (
        <DetalheReceitaContext.Provider value={{receita, setReceita}}>
            {children}
        </DetalheReceitaContext.Provider>
    )
}

