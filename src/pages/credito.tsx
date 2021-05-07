import style from '../styles/main.module.scss';
import creditStyle from '../styles/Credit.module.scss';
import { Balance } from '../components/Balance';
import { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function credito() {
    const { activePlan, disponibleCredit, creditSolicitation } = useContext(BankContext);
    function solicitation(){
        creditSolicitation(activePlan);
    }
    return (
        <main className={style.main}>
            <header className={style.mainFull90}>
                <Balance />
            </header>
            {(activePlan === "Start") ?
                (<>
                    <div className={creditStyle.credit}>
                        <header>
                            <h1>Crédito Disponível</h1>
                        </header>

                        <p className={creditStyle.balance}>R$ 0</p>
                        <p>Para poder solicitar crédito você precisa fazer parte de pelo menos um de nossos planos (prata, ouro, ou platina).</p>
                        <button type="button">Solicitar Crédito</button>

                    </div>
                </>) :
                (<>
                    <div className={`${creditStyle.credit} ${activePlan === "prata" ? creditStyle.silver : activePlan === "ouro" ? creditStyle.gold : activePlan === "platina" ? creditStyle.platinum : creditStyle.credit}`}>
                        <header>
                            <h1>Crédito Disponível</h1>
                        </header>
                        <p className={creditStyle.balance}>
                            R$ {disponibleCredit}
                        </p>
                        <p>Parabéns você pertence ao plano {activePlan === "prata" ? (<>prata</>) : activePlan === "ouro" ? (<>ouro</>) : (<>platina</>)} e pode solicitar essa quantia de crédito, solicite agora e tenha a opção de compra com o seu crédito!</p>
                        <button type="button" onClick={solicitation}>Solicitar Crédito</button>

                    </div>
                </>)}

        </main>
    );
}