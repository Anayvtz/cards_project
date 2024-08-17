import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const contextValue = useContext(UserContext);
    if (!contextValue) {
        throw new Error("user context returned no value");
    }
    return contextValue;
}