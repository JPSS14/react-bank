import { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';
import style from '../styles/Profile.module.scss';

export function Profile(){
    const {name} = useContext(BankContext);
    return(
        <div className={style.mainProfile}>
            <p>{name}</p>
            <p>Conta: 8745894-7</p>
        </div>
    );
}