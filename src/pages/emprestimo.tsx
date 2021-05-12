import { Balance } from "../components/Balance";
import style from '../styles/main.module.scss';
import emprestStyle from '../styles/Emprestimo.module.scss';

export default function emprestimo() {
    return (
        <main className={style.main}>
            <header className={style.mainFull90}>
                <Balance />
            </header>
            <div className={emprestStyle.mainEmprest}>
                <header>
                    <h1>Empréstimo</h1>
                    <p>Você pode pedir até R$ 1000,00</p>
                </header>
                <div className={emprestStyle.emprest}>
                    <input type="number" placeholder="R$ 1000,00"></input>
                    <button>Solicitar</button>
                </div>
            </div>

        </main>
    );
}