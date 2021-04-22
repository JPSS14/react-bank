import { useState } from 'react';
import style from '../styles/TransferCard.module.scss';

export function TransferCard({key, nome, conta, img}){
    const [option, setOption] = useState("");

    return(
        <article className={style.friendArticle} key={key}>

            <header>
                <div className={style.friendImg}>
                    <img src={`/${img}`} />
                </div>
                <h2>{nome}</h2>
            </header>
            <div className={style.friendPix}>
                <header>
                    <h3>Informações</h3>
                </header>
                <div className={style.friendPixItem}>
                    <input type="radio" id={`${nome}${key}`} checked={option === conta} value={conta} onChange={(e) => { setOption(e.target.value) }}></input>
                    <label htmlFor={`${nome}${key}`}>Conta: {conta}</label>
                </div>
                <button>Selecionar</button>
            </div>
        </article>
    );
}