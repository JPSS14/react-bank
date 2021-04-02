import style from '../styles/Balance.module.scss';

export function Balance(){
    return(
            <div className={style.mainBalance}>
                <header>
                    <h1>Saldo: </h1>
                </header>
                <div>
                    <p>R$ 2.500,00</p>
                </div>
            </div>
    );
}