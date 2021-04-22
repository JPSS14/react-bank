import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { BankContext } from '../contexts/BankContext';
import friendStyle from '../styles/listaAmigos.module.scss';


export function PixCard({ key, img, nome, optionCelular, optionCpf, optionEmail }) {
    const [option, setOption] = useState("");
    const { pixOption } = useContext(BankContext);
    const router = useRouter();

    function select() {
        if (option.includes("cpf")) {
            router.push(`/pix/${option}`);
            pixOption(option);
        } else if (option.includes("celular")) {
            router.push(`/pix/${option}`);
            pixOption(option);
        } else if (option.includes("email")) {
            router.push(`/pix/${option}`);
            pixOption(option);
        }
        console.log(option);
    }

    return (
        <article className={friendStyle.friendArticle} key={key}>

            <header>
                <div className={friendStyle.friendImg}>
                    <img src={`/${img}`} />
                </div>
                <h2>{nome}</h2>
            </header>
            <div className={friendStyle.friendPix}>
                <header>
                    <h3>Chaves Pix</h3>
                </header>
                <div className={friendStyle.friendPixItem}>
                    <input type="radio" id={`${nome}${key}`} checked={option === optionCelular} value={optionCelular} onChange={(e) => { setOption(e.target.value) }}></input>
                    <label htmlFor={`${nome}${key}`}>Celular</label>
                </div>
                <div className={friendStyle.friendPixItem}>
                    <input type="radio" id={`${nome}${key + 1}`} checked={option === optionEmail} value={optionEmail} onChange={(e) => { setOption(e.target.value) }}></input>
                    <label htmlFor={`${nome}${key + 1}`}>Email</label>
                </div>
                <div className={friendStyle.friendPixItem}>
                    <input type="radio" id={`${nome}${key + 2}`} checked={option === optionCpf} value={optionCpf} onChange={(e) => { setOption(e.target.value) }}></input>
                    <label htmlFor={`${nome}${key + 2}`}>CPF</label>
                </div>
                <button onClick={select}>Selecionar</button>
            </div>
        </article>
    );
}

