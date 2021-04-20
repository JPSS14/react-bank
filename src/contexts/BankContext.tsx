import {createContext, ReactNode, useState} from 'react';
import friends from '../../friends.json';

interface User{
    name: string;
    password: string;
}

interface Friend{
    nome: string;
    img: string;
    rota: string;
    optionCpf: string;
    optionEmail: string;
    cpf: string;
    celular: string;
    email: string;
}

interface BankContextData{
    balance: number;
    updateBalance: (value:number) => void;
    login: (name:string, password:string) => void;
    name: string;
    password: string;
    pixOption: (friendOption: any) => void;
    activeFriend: Friend;
}

export const BankContext = createContext({} as BankContextData);

interface BankProviderProps{
    children: ReactNode;
}

export function BankProvider({children}:BankProviderProps){
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [activeFriend, setActiveFriend] = useState(null);

    function updateBalance(value:number){
        setBalance(balance+value);
    }

    function login(name:string, password:string){
        setName(name);
        setPassword(password);
    }

    function pixOption(friendOption: any){
        setActiveFriend(friends.filter(friends => friends.optionCpf === friendOption)[0]);
        console.log(activeFriend);
    }

    return(
        <BankContext.Provider
            value={{
                balance,
                updateBalance,
                login,
                name,
                password,
                pixOption,
                activeFriend
            }}
        >
            {children}
        </BankContext.Provider>
    );
}