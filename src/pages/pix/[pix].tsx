import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BankContext } from "../../contexts/BankContext";
import {Balance} from "../../components/Balance";
import style from '../../styles/main.module.scss';
import pixStyle from '../../styles/Pix.module.scss';


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
            <article className={pixStyle.article}>
                <header>
                    <div className={pixStyle.imgContainer}>
                        <img src={`/${activeFriend.img}`} />
                    </div>
                    <h1>{activeFriend.nome}</h1>
                </header>
                <div className={pixStyle.articleInfo}>
                    <h2>Informações</h2>
                    <p>CPF: <span className={pixStyle.info}>{activeFriend.cpf}</span></p>
                    <p>Celular: <span className={pixStyle.info}>{activeFriend.celular}</span></p>
                    <p>Email: <span className={pixStyle.info}>{activeFriend.email}</span></p>
                </div>
                <div className={pixStyle.articleInsert}>
                    <h2>Valor do Pix</h2>
                    <div className={pixStyle.insert}>
                        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="R$"/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" />
                        <button onClick={teste}>Inserir</button>
                    </div>
                </div>
            </article>
        </main>
    );
}