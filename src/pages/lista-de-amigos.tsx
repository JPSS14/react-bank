import style from '../styles/main.module.scss';
import { useContext, useEffect, useState } from 'react';
import friendStyle from '../styles/listaAmigos.module.scss';
import friends from '../../friends.json';
import { PixCard } from '../components/PixCard';

export default function ListaDeAmigos() {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = friends;
            setFriendList(list);
        }
        loadAll();
    }, []);

    return (
        <main className={style.main}>
            <section className={friendStyle.mainFriend}>
                <header>
                    <h1>Lista de Amigos</h1>
                </header>

                {friendList.map((item, key) => (
                    <>
                        <PixCard key={key} img={item.img} nome={item.nome} optionCelular={item.optionCelular} optionCpf={item.optionCpf} optionEmail={item.optionEmail} />
                    </>
                ))}

            </section>
        </main>
    );
}