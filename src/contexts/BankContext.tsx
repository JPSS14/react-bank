import {createContext, ReactNode, useState} from 'react';

interface User{
    name: string;
    password: string;
}

interface BankContextData{
    balance: number;
    updateBalance: (value:number) => void;
}

export const BankContext = createContext({} as BankContextData);

interface BankProviderProps{
    children: ReactNode;
}

export function BankProvider({children}:BankProviderProps){

    const [balance, setBalance] = useState(0);

    function updateBalance(value:number){
        setBalance(balance+value);
    }

    return(
        <BankContext.Provider
            value={{
                balance,
                updateBalance
            }}
        >
            {children}
        </BankContext.Provider>
    );
}