import { createContext, useState } from "react";

export const ReceitaContext = createContext();
ReceitaContext.displayName = "Receita";

export const ReceitaProvider = ({children}) =>{
    const [receita, setReceita] = useState([]);

    return (
        <ReceitaContext.Provider value={{receita, setReceita}}>
            {children}
        </ReceitaContext.Provider>
    )
}

