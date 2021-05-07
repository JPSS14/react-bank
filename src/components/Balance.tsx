import style from '../styles/Balance.module.scss';
import { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export function Balance() {
    const { balance, activeCredit } = useContext(BankContext);
    return (
        <div className={style.mainBalance}>
            <div className={style.balance}>
                <header>
                    <h1>Saldo: </h1>
                </header>
                <div>
                    <p>R$ {balance}</p>
                </div>
            </div>
            {activeCredit > 0 ? (
                <div className={style.credit}>
                    <header>
                        <h1>Crédito:</h1>
                    </header>
                    <div>
                        <p>R$ {activeCredit}</p>
                    </div>
                </div>
            ) : (<></>)}


            <div className={style.mainBalanceShow}>
                Mostrar Saldo
            </div>
        </div>
    );
}