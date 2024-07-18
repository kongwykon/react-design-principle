import React, { useState, useEffect } from 'react';


export const BigPageContaxt = React.createContext({});

export function useBigPage(): any {
    return React.useContext(BigPageContaxt);
}

export function BigPageProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState({});
    return (
        <BigPageContaxt.Provider value={state}>
            {children}
        </BigPageContaxt.Provider>
    )
}