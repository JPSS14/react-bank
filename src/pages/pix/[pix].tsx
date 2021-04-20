import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BankContext } from "../../contexts/BankContext";
import {Balance} from "../../components/Balance";
import style from '../../styles/main.module.scss';


export default function Pix() {
    const router = useRouter();
    const { activeFriend } = useContext(BankContext);
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    console.log("active: ", activeFriend.nome);

    function teste() {
        console.log("password: ", password, " value: ", value);
    }

    return (
        <main className={style.main}>
            <header className={style.mainFull90}>
                <Balance />
            </header>
            <article>
                <header>
                    <div>
                        <img src={`/${activeFriend.img}`} />
                    </div>
                    <h1>{activeFriend.nome}</h1>
                </header>
                <div>
                    <p>CPF: {activeFriend.cpf}</p>
                    <p>Celular: {activeFriend.celular}</p>
                    <p>Email: {activeFriend.email}</p>
                </div>
                <div>
                    <h2>Valor do Pix</h2>
                    <div>
                        <p>R$</p>
                        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={teste}>Inserir</button>
                    </div>
                </div>
            </article>
        </main>
    );
}