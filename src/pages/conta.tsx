import Head from 'next/head'
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { Profile } from '../components/Profile';
import style from '../styles/main.module.scss';
import { Services } from '../components/Services';
import { PlansBox } from '../components/PlansBox';
import { ProductsBox } from '../components/ProductsBox';
import { Footer } from '../components/Footer';
import { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';
import { Ops } from '../components/Ops';

export default function Home() {
    const { name, password } = useContext(BankContext);
    const vazio = "";

    return (

        <>
            {vazio === name && vazio === password ? 
            (
                <Ops/>
            )
                : (
                    <>
                        <Head>
                            <title>React Bank</title>
                        </Head>
                        <main className={style.main}>
                            <div className={style.mainHeader}>
                                <Balance />
                                <Profile />
                            </div>
                            <div className={style.mainServices}>
                                <Services />
                            </div>
                            <div className={style.mainPlans}>
                                <PlansBox />
                            </div>
                            <div className={style.mainProductsBox}>
                                <ProductsBox />
                            </div>
                        </main>
                    </>
                )}
        </>
    );
}