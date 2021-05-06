import style from '../styles/main.module.scss';
import creditStyle from '../styles/Credit.module.scss';
import { Balance } from '../components/Balance';

export default function credito() {
    return (
        <main className={style.main}>
            <header className={style.mainFull90}>
                <Balance />
            </header>
            <div className={creditStyle.credit}>
                <header>
                    <h1>Crédito Disponível</h1>
                </header>

                <p className={creditStyle.balance}>R$ 1000</p>
                <p>Parabéns você pertence ao plano … e pode solicitar essa quantia de crédito, solicite agora e tenha a opção de compra com o seu crédito!</p>
                <button type="button">Solicitar Crédito</button>

            </div>
        </main>
    );
}