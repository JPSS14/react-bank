import {createContext, ReactNode, useState} from 'react';

interface User{
    name: string;
    password: string;
}

interface BankContextData{
    balance: number;
    updateBalance: (value:number) => void;
    login: (name:string, password:string) => void;
    name: string;
    password: string;
}

export const BankContext = createContext({} as BankContextData);

interface BankProviderProps{
    children: ReactNode;
}

export function BankProvider({children}:BankProviderProps){

    const [balance, setBalance] = useState(0);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function updateBalance(value:number){
        setBalance(balance+value);
    }

    function login(name:string, password:string){
        setName(name);
        setPassword(password);
    }

    return(
        <BankContext.Provider
            value={{
                balance,
                updateBalance,
                login,
                name,
                password
            }}
        >
            {children}
        </BankContext.Provider>
    );
}