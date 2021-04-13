import { useState } from 'react';
import style from '../styles/main.module.scss';

export default function ListaDeAmigos() {
    const [option, setOption] = useState("");
    return (
        <main className={style.main}>
            <section>
                <header>
                    <h1>Lista de Amigos</h1>
                </header>

                <article>
                    <header>
                        <img src="/mario-card.png" />
                        <h2>Mario</h2>
                    </header>
                    <div>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <input type="radio" id="teste1" checked={option === "celular-mario"} value="celular-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                        <label htmlFor="teste1">Telefone</label>
                        <input type="radio" id="teste2" checked={option === "email-mario"} value="email-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                        <label htmlFor="teste2">Email</label>
                        <input type="radio" id="teste3" checked={option === "cpf-mario"} value="cpf-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                        <label htmlFor="teste3">Email</label>
                        <button>Selecionar</button>
                    </div>
                </article>

                <article>
                    <header>
                        <img src="/luigi-card.png" />
                        <h2>Luigi</h2>
                    </header>
                    <div>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <input type="radio" id="teste4" checked={option === "celular-luigi"} value="celular-luigi" onChange={(e) => {setOption(e.target.value)}}></input>
                        <label htmlFor="teste4">Telefone</label>
                        <input type="radio" id="teste5" checked={option === "email-luigi"} value="email-luigi" onChange={(e) => {setOption(e.target.value)}}></input>
                        <label htmlFor="teste5">Email</label>
                        <input type="radio" id="teste6" checked={option === "cpf-luigi"} value="cpf-luigi" onChange={(e) => {setOption(e.target.value)}}></input>
                        <label htmlFor="teste6">Email</label>
                        <button>Selecionar</button>
                    </div>
                </article>
            </section>
        </main>
    );
}