import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BankContext } from "../../contexts/BankContext";
import { Balance } from "../../components/Balance";
import style from '../../styles/main.module.scss';
import pixStyle from '../../styles/Pix.module.scss';


export default function Pix() {
    const router = useRouter();
    const { activeFriend, balance, transferValidation, password } = useContext(BankContext);
    const [value, setValue] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [option, setOption] = useState("valid");

    console.log("active: ", activeFriend.nome);

    function teste() {
        const valor = parseFloat(value);

        setOption(transferValidation(valor, currentPassword));

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
                        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="R$" />
                        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Sua senha" />
                        <button onClick={teste}>Inserir</button>
                    </div>
                </div>
            </article>

            {(option === "valid") ?
                (<></>) :
                (option === "invalid") ?
                    (<div className={pixStyle.status}>
                        <p>O valor informado supera seu limite!</p>
                    </div>) :
                    (option === "invalid-password") ?
                        (<div className={pixStyle.status}>
                            <p>Senha incorreta!</p>
                        </div>) : (<></>)}

        </main>
    );
}