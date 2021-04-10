import style from '../styles/InsertBalance.module.scss';

export function InsertBalance() {
    return (
            <div className={style.insertBalance}>
                <header>
                    <h1>Inserir Saldo</h1>
                </header>
                <div className={style.insertBalanceContent}>
                    <div className={style.balance}>
                        <p>R$</p>
                        <input type="text"></input>
                    </div>
                    <div className={style.insertButton}>
                        <p>Inserir</p>
                    </div>
                </div>
            </div>
    );
}