import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { BankContext } from '../contexts/BankContext';
import friendStyle from '../styles/listaAmigos.module.scss';
import friends from '../../friends.json';

export function FriendPix() {
    const [friendList, setFriendList] = useState([]);
    const [option, setOption] = useState("");
    const { pixOption } = useContext(BankContext);
    const router = useRouter();

    useEffect(() => {
        const loadAll = async () => {
            let list = friends;
            setFriendList(list);
        }
        loadAll();
    }, []);

    function select() {
        if (option.includes("cpf")) {
            router.push(`/transfer/${option}`);
            pixOption(option);
        } else if (option.includes("celular")) {
            router.push(`/transfer/${option}`);
            pixOption(option);
        } else if (option.includes("email")) {
            router.push(`/transfer/${option}`);
            pixOption(option);
        }
        console.log(option);
    }
    return (
        <>
            {friendList.map((item, key) => (
                <article className={friendStyle.friendArticle} key={key}>

                    <header>
                        <div className={friendStyle.friendImg}>
                            <img src={`/${item.img}`} />
                        </div>
                        <h2>{item.nome}</h2>
                    </header>
                    <div className={friendStyle.friendPix}>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id={`${item.nome}${key}`} checked={option === item.optionCelular} value={item.optionCelular} onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor={`${item.nome}${key}`}>Celular</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id={`${item.nome}${key + 1}`} checked={option === item.optionEmail} value={item.optionEmail} onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor={`${item.nome}${key + 1}`}>Email</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id={`${item.nome}${key + 2}`} checked={option === item.optionCpf} value={item.optionCpf} onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor={`${item.nome}${key + 2}`}>CPF</label>
                        </div>
                        <button onClick={select}>Selecionar</button>
                    </div>
                </article>
            ))}
        </>
    );
}