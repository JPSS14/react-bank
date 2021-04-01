import Head from 'next/head'
import { Header } from '../components/Header';
import { Saldo } from '../components/Saldo';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Bank</title>
      </Head>
      <Header />
      <main>
        <Saldo />
      </main>
    </>
  );
}
