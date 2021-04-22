import style from '../styles/main.module.scss';

export default function Planos(){
    return(
        <main className={style.main}>
            <section>
                <header>
                    <h1>Planos</h1>
                </header>

                <article>
                    <header>
                        <h2>Prata</h2>
                    </header>
                    <h3>Requisito</h3>
                    <p>Para ser um membro do plano de prata você precisa ter no mínimo R$ 1000,00.</p>
                    <h3>Crédito</h3>
                    <p>Com o plano prata você tem direito a pedir R$ 1000,00 de crédito!</p>
                    <h3>Empréstimo</h3>
                    <p>Com o plano prata você pode pedir até R$ 1000,00 de emprestimo, com juros de 20%.</p>
                    <h3>Saldo Especial</h3>
                    <p>Com o plano prata você pode ficar até com R$ -1000,00.</p>
                    <button>Selecionar</button>
                </article>

                <article>
                    <header>
                        <h2>Ouro</h2>
                    </header>
                    <h3>Requisito</h3>
                    <p>Para ser um membro do plano de ouro você precisa ter no mínimo R$ 5000,00.</p>
                    <h3>Crédito</h3>
                    <p>Com o plano ouro você tem direito a pedir R$ 5000,00 de crédito!</p>
                    <h3>Empréstimo</h3>
                    <p>Com o plano ouro você pode pedir até R$ 5000,00 de emprestimo, com juros de 20%.</p>
                    <h3>Saldo Especial</h3>
                    <p>Com o plano ouro você pode ficar até com R$ -5000,00.</p>
                    <button>Selecionar</button>
                </article>

                <article>
                    <header>
                        <h2>Platina</h2>
                    </header>
                    <h3>Requisito</h3>
                    <p>Para ser um membro do plano de platina você precisa ter no mínimo R$ 15000,00.</p>
                    <h3>Crédito</h3>
                    <p>Com o plano platina você tem direito a pedir R$ 15000,00 de crédito!</p>
                    <h3>Empréstimo</h3>
                    <p>Com o plano platina você pode pedir até R$ 15000,00 de emprestimo, com juros de 20%.</p>
                    <h3>Saldo Especial</h3>
                    <p>Com o plano platina você pode ficar até com R$ -15000,00.</p>
                    <h3>Financiamento</h3>
                    <p>Com o plano platina você pode fazer financiamento de casas e carros!</p>
                    <button>Selecionar</button>
                </article>
                
            </section>
        </main>
    );
}