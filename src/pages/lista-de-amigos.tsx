import style from '../styles/main.module.scss';
import friendStyle from '../styles/listaAmigos.module.scss';
import {Friend} from '../components/Friend';

export default function ListaDeAmigos() {
    return (
        <main className={style.main}>
            <section className={friendStyle.mainFriend}>
                <header>
                    <h1>Lista de Amigos</h1>
                </header>

                <Friend/>

            </section>
        </main>
    );
}