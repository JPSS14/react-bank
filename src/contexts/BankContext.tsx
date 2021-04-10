import {createContext, ReactNode, useState} from 'react';

interface User{
    name: string;
    password: string;
}

interface BankContextData{
    balance: number;
}

export const BankContext = createContext({} as BankContextData);

interface BankProviderProps{
    children: ReactNode;
}

export function BankProvider({children}:BankProviderProps){

    const [balance, setBalance] = useState(0);

    return(
        <BankContext.Provider
            value={{
                balance
            }}
        >
            {children}
        </BankContext.Provider>
    );
}