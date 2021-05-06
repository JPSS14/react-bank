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
    silverPlanValidation: (plan: any) => string;
    goldPlanValidation: (plan: any) => string;
    platinumPlanValidation: (plan: any) => string;
    activePlan: string;
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

    function transferOption(friend: any) {
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
        } else {
            status = "invalid-password";
        }
        return status;
    }

    function silverPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "prata" && balance >= 1000) {
            setActivePlan("prata");
            status = "prata";
            return status;
        }else{
            status = "silver-invalid-balance";
        }
        return status;
    }

    function goldPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "ouro" && balance >= 5000) {
            setActivePlan("ouro");
            status = "ouro";
            return status;
        }else{
            status = "gold-invalid-balance";
        }
        return status;
    }

    function platinumPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "platina" && balance >= 15000) {
            setActivePlan("platina");
            status = "platina";
            return status;
        }else{
            status = "platinum-invalid-balance";
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
                transferOption,
                silverPlanValidation,
                goldPlanValidation,
                platinumPlanValidation,
                activePlan
            }}
        >
            {children}
        </BankContext.Provider>
    );
}