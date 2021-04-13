import style from '../styles/main.module.scss';
import { InsertBalance } from '../components/InsertBalance';
import { Balance } from '../components/Balance';
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
                        <main className={style.main}>
                            <header className={style.mainFull90}>
                                <Balance />
                            </header>
                            <div className={style.mainInsertBalance}>
                                <InsertBalance />
                            </div>
                        </main>
                    </>
                )
            }
        </>
    );
}