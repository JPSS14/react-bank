import { useContext, useState } from 'react';
import { BankContext } from '../contexts/BankContext';
import style from '../styles/InsertBalance.module.scss';


export function InsertBalance() {
const {updateBalance} = useContext(BankContext);

const [value, setValue] = useState('');

    function insert() {
        const valor = parseFloat(value);
        if(valor>0){
            updateBalance(parseFloat(valor.toFixed(2)));
        }      
    }
    return (
        <div className={style.insertBalance}>
            <header>
                <h1>Inserir Saldo</h1>
            </header>
            <div className={style.insertBalanceContent}>
                <div className={style.balance}>
                    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} id="balance" placeholder="R$"></input>
                </div>
                <button className={style.insertButton} onClick={insert}>Inserir</button>
            </div>
        </div>
    );
}