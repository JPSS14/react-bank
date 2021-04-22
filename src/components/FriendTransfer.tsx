import style from '../styles/FriendTransfer.module.scss';
import { useEffect, useState } from 'react';
import friends from '../../friends.json';

export function FriendTransfer() {
    const [friendList, setFriendList] = useState([]);
    const [option, setOption] = useState("");

    useEffect(() => {
        const loadAll = async () => {
            let list = friends;
            setFriendList(list);
        }
        loadAll();
    }, []);

    return (
        <>
            {friendList.map((item, key) => (
                <article className={style.friendArticle} key={key}>

                    <header>
                        <div className={style.friendImg}>
                            <img src={`/${item.img}`} />
                        </div>
                        <h2>{item.nome}</h2>
                    </header>
                    <div className={style.friendPix}>
                        <header>
                            <h3>Informações</h3>
                        </header>
                        <div className={style.friendPixItem}>
                            <input type="radio" id={`${item.nome}${item.key + 1}`} checked={option === item.conta} value={item.conta} onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor={`${item.nome}${item.key + 1}`}>Conta: {item.conta}</label>
                        </div>
                        <button>Selecionar</button>
                    </div>
                </article>
            ))}
        </>
    );
}