import planStyle from '../styles/Planos.module.scss';
import style from '../styles/main.module.scss';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function Planos() {
    const router = useRouter();
    const { silverPlanValidation, goldPlanValidation, platinumPlanValidation } = useContext(BankContext);
    const [planStatus, setPlanStatus] = useState('');

    function validacao(plan: string) {
        if (plan === "prata") {
            setPlanStatus(silverPlanValidation(plan));
        } else if (plan === "ouro") {
            setPlanStatus(goldPlanValidation(plan));
        } else if (plan === "platina") {
            setPlanStatus(platinumPlanValidation(plan));
        }
    }


    return (
        <main className={style.main}>
            <section className={planStyle.mainSection}>
                <header>
                    <h1>Planos</h1>
                </header>
                {(router.query.content === "all" || router.query.content === "silver") ? (
                    <>
                        <article className={`${planStyle.mainArticle} ${planStyle.silver}`}>
                            <header>
                                <h2>Prata</h2>
                            </header>
                            <div className={planStyle.mainArticleContent}>
                                <h3>Requisito:</h3>
                                <p>Para ser um membro do plano de prata você precisa ter no mínimo R$ 1000,00.</p>
                                <h3>Crédito:</h3>
                                <p>Com o plano prata você tem direito a pedir R$ 1000,00 de crédito!</p>
                                <h3>Empréstimo:</h3>
                                <p>Com o plano prata você pode pedir até R$ 1000,00 de emprestimo, com juros de 20%.</p>
                                <h3>Saldo Especial:</h3>
                                <p>Com o plano prata você pode ficar até com R$ -1000,00.</p>
                            </div>
                            <button onClick={() => validacao("prata")}>Selecionar</button>
                            {planStatus === "" ? (<></>) :
                            (planStatus === "prata") ?
                                (
                                    <div className={planStyle.aceptMensage}>
                                        <p>Bem vindo ao Prata!</p>
                                    </div>
                                ) :
                                (planStatus === "silver-invalid-balance") ?
                                    (
                                        <div className={planStyle.failMensage}>
                                            <p>O seu saldo é insuficiente</p>
                                        </div>
                                    ) : (<></>)}
                        </article>

                        
                    </>
                ) : (<></>)}

                {(router.query.content === "all" || router.query.content === "gold") ? (
                    <>
                        <article className={`${planStyle.mainArticle} ${planStyle.gold}`}>
                            <header>
                                <h2>Ouro</h2>
                            </header>
                            <div className={planStyle.mainArticleContent}>
                                <h3>Requisito:</h3>
                                <p>Para ser um membro do plano de ouro você precisa ter no mínimo R$ 5000,00.</p>
                                <h3>Crédito:</h3>
                                <p>Com o plano ouro você tem direito a pedir R$ 5000,00 de crédito!</p>
                                <h3>Empréstimo:</h3>
                                <p>Com o plano ouro você pode pedir até R$ 5000,00 de emprestimo, com juros de 20%.</p>
                                <h3>Saldo Especial:</h3>
                                <p>Com o plano ouro você pode ficar até com R$ -5000,00.</p>
                            </div>
                            <button onClick={() => validacao("ouro")}>Selecionar</button>
                            {planStatus === "" ? (<></>) :
                            (planStatus === "ouro") ?
                                (
                                    <div className={planStyle.aceptMensage}>
                                        <p>Bem vindo ao Ouro!</p>
                                    </div>
                                ) :
                                (planStatus === "gold-invalid-balance") ?
                                    (
                                        <div className={planStyle.failMensage}>
                                            <p>O seu saldo é insuficiente</p>
                                        </div>
                                    ) : (<></>)}
                        </article>

                        
                    </>
                ) : (<></>)}

                {(router.query.content === "all" || router.query.content === "platinum") ? (
                    <>
                        <article className={`${planStyle.mainArticle} ${planStyle.platiun}`}>
                            <header>
                                <h2>Platina</h2>
                            </header>
                            <div className={planStyle.mainArticleContent}>
                                <h3>Requisito:</h3>
                                <p>Para ser um membro do plano de platina você precisa ter no mínimo R$ 15000,00.</p>
                                <h3>Crédito:</h3>
                                <p>Com o plano platina você tem direito a pedir R$ 15000,00 de crédito!</p>
                                <h3>Empréstimo:</h3>
                                <p>Com o plano platina você pode pedir até R$ 15000,00 de emprestimo, com juros de 20%.</p>
                                <h3>Saldo Especial:</h3>
                                <p>Com o plano platina você pode ficar até com R$ -15000,00.</p>
                                <h3>Financiamento:</h3>
                                <p>Com o plano platina você pode fazer financiamento de casas e carros!</p>
                            </div>
                            <button className={planStyle.lastButton} onClick={() => validacao("platina")}>Selecionar</button>
                            {planStatus === "" ? (<></>) :
                            (planStatus === "platina") ?
                                (
                                    <div className={planStyle.aceptMensage}>
                                        <p>Bem vindo ao Platina!</p>
                                    </div>
                                ) :
                                (planStatus === "platinum-invalid-balance") ?
                                    (
                                        <div className={planStyle.failMensage}>
                                            <p>O seu saldo é insuficiente</p>
                                        </div>
                                    ) : (<></>)}
                        </article>

                        
                    </>
                ) : (<></>)}

            </section>
        </main>
    );
}