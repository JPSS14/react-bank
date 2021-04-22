import style from '../styles/main.module.scss';
import friendStyle from '../styles/listaAmigos.module.scss';
import { FriendTransfer } from '../components/FriendTransfer';
import { FriendPix } from '../components/FriendPix';
import { useRouter } from 'next/router';

export default function ListaDeAmigos() {
    const router = useRouter();

    return (
        <main className={style.main}>
            <section className={friendStyle.mainFriend}>
                <header>
                    <h1>Lista de Amigos</h1>
                </header>

                {(router.query.mode === "pix") ?
                    (<FriendPix />) :
                    (<FriendTransfer />)
                }

            </section>
        </main>
    );
}