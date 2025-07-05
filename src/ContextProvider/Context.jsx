import { createContext } from "react";

export const FuncContext = createContext()
const Context = ({ children }) => {
    const handleInput = (ref) => {
        ref.current?.click()
    }
    const info = {
        handleInput
    }
    return (
        <FuncContext.Provider value={info}>
            {children}
        </FuncContext.Provider>
    )
};

export default Context;