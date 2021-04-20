import Head from 'next/head'
import style from '../styles/main.module.scss';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import {BankContext} from '../contexts/BankContext';

export default function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const {login} = useContext(BankContext);

  function loginBox() {
    if ((name != "") && (password != "")) {
      router.push("/conta");
      login(name,password);
    }
  }

  return (
    <>
      <Head>
        <title>React Bank</title>
      </Head>
      <main className={style.main}>
        <div className={style.mainLogin}>
          <header>
            <h1>Login</h1>
          </header>
          <div className={style.loginBox}>
            <p>Cadastre-se no React Bank!</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"></input>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"></input>
            <button onClick={loginBox}>Entrar</button>
          </div>
        </div>
      </main>
    </>
  );
}
