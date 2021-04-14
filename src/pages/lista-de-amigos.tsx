import { useState } from 'react';
import style from '../styles/main.module.scss';
import friendStyle from '../styles/listaAmigos.module.scss';

export default function ListaDeAmigos() {
    const [option, setOption] = useState("");

    function teste() {
        console.log(option);
    }
    return (
        <main className={style.main}>
            <section className={friendStyle.mainFriend}>
                <header>
                    <h1>Lista de Amigos</h1>
                </header>

                <article className={friendStyle.friendArticle}>
                    <header>
                        <div className={friendStyle.friendImg}>
                            <img src="/mario-card.png" />
                        </div>
                        <h2>Mario</h2>
                    </header>
                    <div className={friendStyle.friendPix}>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste1" checked={option === "celular-mario"} value="celular-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste1">Celular</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste2" checked={option === "email-mario"} value="email-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste2">Email</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste3" checked={option === "cpf-mario"} value="cpf-mario" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste3">CPF</label>
                        </div>
                        <button onClick={teste}>Selecionar</button>
                    </div>
                </article>

                <article className={friendStyle.friendArticle}>
                    <header>
                        <div className={friendStyle.friendImg}>
                            <img src="/luigi-card.png" />
                        </div>
                        <h2>Luigi</h2>
                    </header>
                    <div className={friendStyle.friendPix}>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste4" checked={option === "celular-luigi"} value="celular-luigi" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste4">Celular</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste5" checked={option === "email-luigi"} value="email-luigi" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste5">Email</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste6" checked={option === "cpf-luigi"} value="cpf-luigi" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste6">CPF</label>
                        </div>
                        <button onClick={teste}>Selecionar</button>
                    </div>
                </article>

                <article className={friendStyle.friendArticle}>
                    <header>
                        <div className={friendStyle.friendImg}>
                            <img src="/han-solo-card.png" />
                        </div>
                        <h2>Han Solo</h2>
                    </header>
                    <div className={friendStyle.friendPix}>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste7" checked={option === "celular-han-solo"} value="celular-han-solo" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste7">Celular</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste8" checked={option === "email-han-solo"} value="email-han-solo" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste8">Email</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste9" checked={option === "cpf-han-solo"} value="cpf-han-solo" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste9">CPF</label>
                        </div>
                        <button onClick={teste}>Selecionar</button>
                    </div>
                </article>

                <article className={friendStyle.friendArticle}>
                    <header>
                        <div className={friendStyle.friendImg}>
                            <img src="/princesa-leia-card.png" />
                        </div>
                        <h2>Princesa Leia</h2>
                    </header>
                    <div className={friendStyle.friendPix}>
                        <header>
                            <h3>Chaves Pix</h3>
                        </header>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste10" checked={option === "celular-princesa-leia"} value="celular-princesa-leia" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste10">Celular</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste11" checked={option === "email-princesa-leia"} value="email-princesa-leia" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste11">Email</label>
                        </div>
                        <div className={friendStyle.friendPixItem}>
                            <input type="radio" id="teste12" checked={option === "cpf-princesa-leia"} value="cpf-princesa-leia" onChange={(e) => { setOption(e.target.value) }}></input>
                            <label htmlFor="teste12">CPF</label>
                        </div>
                        <button onClick={teste}>Selecionar</button>
                    </div>
                </article>
            </section>
        </main>
    );
}