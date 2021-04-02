import Head from 'next/head'
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { Profile } from '../components/Profile';
import style from '../styles/main.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Bank</title>
      </Head>
      <Header />
      <main className={style.main}>
        <div className={style.mainHeader}>
          <Balance />
          <Profile />
        </div>
      </main>
    </>
  );
}
