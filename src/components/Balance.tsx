import style from '../styles/Balance.module.scss';
import {useContext} from 'react';
import {BankContext} from '../contexts/BankContext';

export function Balance(){
    const {balance} = useContext(BankContext);
    return(
            <div className={style.mainBalance}>
                <header>
                    <h1>Saldo: </h1>
                </header>
                <div>
                    <p>R$ {balance}</p>
                </div>
                <div className={style.mainBalanceShow}>
                    Mostrar Saldo
                </div>
            </div>
    );
}