import { createContext, useState } from "react";

const Pcontext = createContext();

export function PcontentProvider({children}){
    const [a, setA] = useState("a")
    return(
        <>
            <Pcontext.Provider
            value={{
                a,
                setA
            }}>
                {children}
            </Pcontext.Provider>
        </>
    )
}

export {Pcontext}