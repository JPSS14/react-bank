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

    function validation() {
        const valor = parseFloat(value);
        if (valor > 0) {
            setOption(transferValidation(valor, currentPassword));
        } else {
            setOption("invalid-value");
        }
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
                    <p>Conta: <span className={pixStyle.info}>{activeFriend.conta}</span></p>
                </div>
                <div className={pixStyle.articleInsert}>
                    <h2>Valor do Pix</h2>
                    <div className={pixStyle.insert}>
                        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="R$" />
                        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Sua senha" />
                        <button onClick={validation}>Inserir</button>
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
                        </div>) :
                        (option === "invalid-value") ?
                            (<div className={pixStyle.status}>
                                <p>Valor inválido!</p>
                            </div>) :
                            (option === "insert") ?
                                (<div className={pixStyle.statusCorrect}>
                                    <p>Valor depositado com sucesso!</p>
                                </div>) : (<></>)
            }

        </main>
    );
}