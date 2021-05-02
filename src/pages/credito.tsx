import style from '../styles/main.module.scss';
import creditStyle from '../styles/Credit.module.scss';

export default function credito(){
    return(
        <main className={style.main}>
            <div className={creditStyle.credit}>
                <header>
                    <h1>Crédito Disponível</h1>
                </header>
                <div className={creditStyle.disponibleBalance}>
                    <input type="text" value="R$ 1000,00" readOnly></input>
                    <button type="button">Solicitar Crédito</button>
                </div>
            </div>
        </main>
    );
}