import style from '../styles/main.module.scss';
import { Header } from '../components/Header';
import { InsertBalance } from '../components/InsertBalance';
import { Balance } from '../components/Balance';
import { Footer } from '../components/Footer';
import { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';
import { Ops } from '../components/Ops';

export default function iniserirSaldo() {
    const { name, password } = useContext(BankContext);
    const vazio = "";

    return (
        <>
            {vazio === name && vazio === password ?
                (
                    <Ops />
                ) :
                (
                    <>
                        <Header />
                        <main className={style.main}>
                            <header className={style.mainFull90}>
                                <Balance />
                            </header>
                            <div className={style.mainInsertBalance}>
                                <InsertBalance />
                            </div>
                        </main>
                        <Footer />
                    </>
                )
            }
        </>
    );
}