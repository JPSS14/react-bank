import style from '../styles/main.module.scss';
import { Header } from '../components/Header';
import { InsertBalance } from '../components/InsertBalance';
import { Balance } from '../components/Balance';
import { Footer } from '../components/Footer';

export default function iniserirSaldo() {
    return (
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
    );
}