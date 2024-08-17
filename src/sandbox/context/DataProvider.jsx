import React, { createContext, useContext } from 'react'
export const MyContext = createContext();
export default function DataProvider({ children }) {
    const data = {
        data1: 100,
        data2: "something"
    }
    return (
        <MyContext.Provider value={data}>{children}</MyContext.Provider>
    )
}

export const useData = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useContext of MyContext failed");
    }
    return context;
}