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
    disponibleCredit: number;
    creditSolicitation: (plan: string) => void;
    activeCredit: number;
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
    const [disponibleCredit, setDisponibleCredit] = useState(0);
    const [activeCredit, setActiveCredit] = useState(0);

    // Atualiza o saldo do usuário
    function updateBalance(value: number) {
        setBalance(balance + value);
    }

    // Cadastra o nome e senha do usuário
    function login(name: string, password: string) {
        setName(name);
        setPassword(password);
    }

    // Verifica qual opção e amigo, que o usuário escolheu para fazer a transferência, filtra o array para encontrar os dados que correspondam ao amigo escolhido
    function pixOption(friendOption: any) {
        if (friendOption.includes("cpf")) {
            setActiveFriend(friends.filter(friends => friends.optionCpf === friendOption)[0]);
        } else if (friendOption.includes("celular")) {
            setActiveFriend(friends.filter(friends => friends.optionCelular === friendOption)[0]);
        } else if (friendOption.includes("email")) {
            setActiveFriend(friends.filter(friends => friends.optionEmail === friendOption)[0]);
        }
    }

    // Seleciona o amigo e deixa as informações dele salvas
    function transferOption(friend: any) {
        setActiveFriend(friends.filter(friends => friends.conta === friend)[0])
    }

    // Retira o saldo da conta
    function transfer(value: number) {
        setBalance(balance - value);
    }

    // Verifica se a senha está correta
    function passwordValidation(pass: string) {
        if (pass === password) {
            return 1;
        } else {
            return 0;
        }
    }

    // Faz a validação para realizar a transferencia, verifica a senha, verifica o saldo, e rotorna o status se a transferencia foi realizada ou não
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

    // Valida se o usuário atende aos requesitos do plano prata
    function silverPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "prata" && balance >= 1000) {
            setActivePlan("prata");
            setDisponibleCredit(1000);
            status = "prata";
            return status;
        }else{
            status = "silver-invalid-balance";
        }
        return status;
    }

    // Valida se o usuário atende aos requesitos do plano ouro
    function goldPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "ouro" && balance >= 5000) {
            setActivePlan("ouro");
            setDisponibleCredit(5000);
            console.log(activeCredit);
            status = "ouro";
            return status;
        }else{
            status = "gold-invalid-balance";
        }
        return status;
    }

    // Valida se o usuário atende aos requesitos do plano platina
    function platinumPlanValidation(plan: string) {
        let status: string = "";
        if (plan === "platina" && balance >= 15000) {
            setActivePlan("platina");
            setDisponibleCredit(15000);
            status = "platina";
            return status;
        }else{
            status = "platinum-invalid-balance";
        }
        return status;
    }

    // Inseri o saldo de crédito de acordo com cada plano
    function creditSolicitation(plan:string){
        switch (plan){
            case "prata": setActiveCredit(1000); break;
            case "ouro": setActiveCredit(5000); break;
            case "platina": setActiveCredit(15000); break;
        }
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
                activePlan,
                disponibleCredit,
                creditSolicitation,
                activeCredit
            }}
        >
            {children}
        </BankContext.Provider>
    );
}