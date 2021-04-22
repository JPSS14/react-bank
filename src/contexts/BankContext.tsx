import { createContext, ReactNode, useState } from 'react';
import friends from '../../friends.json';

interface User {
    name: string;
    password: string;
}

interface Friend {
    nome: string;
    img: string;
    rota: string;
    optionCpf: string;
    optionEmail: string;
    cpf: string;
    celular: string;
    email: string;
    conta: string;
}

interface BankContextData {
    balance: number;
    updateBalance: (value: number) => void;
    login: (name: string, password: string) => void;
    name: string;
    password: string;
    pixOption: (friendOption: any) => void;
    activeFriend: Friend;
    transferValidation: (value: number, pass: string) => string;
    transferOption: (friend: any) => void;
}

export const BankContext = createContext({} as BankContextData);

interface BankProviderProps {
    children: ReactNode;
}

export function BankProvider({ children }: BankProviderProps) {
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [activeFriend, setActiveFriend] = useState(null);
    const [activePlan, setActivePlan] = useState("Start");

    function updateBalance(value: number) {
        setBalance(balance + value);
    }

    function login(name: string, password: string) {
        setName(name);
        setPassword(password);
    }

    function pixOption(friendOption: any) {
        if (friendOption.includes("cpf")) {
            setActiveFriend(friends.filter(friends => friends.optionCpf === friendOption)[0]);
        } else if (friendOption.includes("celular")) {
            setActiveFriend(friends.filter(friends => friends.optionCelular === friendOption)[0]);
        } else if (friendOption.includes("email")) {
            setActiveFriend(friends.filter(friends => friends.optionEmail === friendOption)[0]);
        }
    }

    function transferOption(friend: any){
        setActiveFriend(friends.filter(friends => friends.conta === friend)[0])
    }

    function transfer(value: number) {
        setBalance(balance - value);
    }

    function passwordValidation(pass: string) {
        if (pass === password) {
            return 1;
        } else {
            return 0;
        }
    }

    function transferValidation(value: number, pass: string) {

        let status: string;
        if (passwordValidation(pass) > 0) {

            if (activePlan === "Start" && (balance - value) >= 0) {
                setBalance(balance - value);
                status = "insert";
                return status;
            } else {
                status = "invalid";
                return status;
            }
        }else{
            status = "invalid-password";
        }
        return status;
    }

    return (
        <BankContext.Provider
            value={{
                balance,
                updateBalance,
                login,
                name,
                password,
                pixOption,
                activeFriend,
                transferValidation,
                transferOption
            }}
        >
            {children}
        </BankContext.Provider>
    );
}