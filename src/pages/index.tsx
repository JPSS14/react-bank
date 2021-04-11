import Head from 'next/head'
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { Profile } from '../components/Profile';
import style from '../styles/main.module.scss';
import { Services } from '../components/Services';
import { PlansBox } from '../components/PlansBox';
import { ProductsBox } from '../components/ProductsBox';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import {useRouter} from 'next/router';

export default function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function login(){
    if((name != "") && (password != "")){
      router.push("/conta");
      console.log("nome ",name,"senha: ", password);
    }
  }

  return (
    <>
      <Head>
        <title>React Bank</title>
      </Head>
      <Header />
      <main className={style.main}>
        <div className={style.mainLogin}>
          <header>
            <h1>Login</h1>
          </header>
          <div>
            <p>Cadastre-se no React Bank!</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button onClick={login}>Entrar</button>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
