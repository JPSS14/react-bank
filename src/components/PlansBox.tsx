import style from '../styles/PlansBox.module.scss';
import Link from 'next/link';

export function PlansBox() {
    return (
        <>
            <div className={style.mainPlansBox}>
                <div className={style.mainPlansHeader}>
                    <header>
                        <h1>Planos</h1>
                    </header>
                </div>
                <div className={style.content}>
                    <section className={style.mainPlansSection}>

                        <Link href="/planos">
                            <a className={style.mainPlansHelp}>
                                <article>
                                    <header>
                                        <h2>?</h2>
                                    </header>
                                </article>
                            </a>
                        </Link>

                        <Link href="/prata">
                            <a className={style.mainPlansArticle}>
                                <article>
                                    <header>
                                        <h2>Prata</h2>
                                    </header>
                                </article>
                            </a>
                        </Link>

                        <Link href="/ouro">
                            <a className={style.mainPlansArticle}>
                                <article>
                                    <header>
                                        <h2>Ouro</h2>
                                    </header>
                                </article>
                            </a>
                        </Link>

                        <Link href="/platina">
                            <a className={style.mainPlansArticle}>
                                <article>
                                    <header>
                                        <h2>Platina</h2>
                                    </header>
                                </article>
                            </a>
                        </Link>

                    </section>
                </div>
            </div>

            <Link href="/planos">
                <a  className={style.mainPlansBoxMobile}>
                    <div>
                        <div>
                            <header className={style.mainPlansHeader}>
                                <h1>Planos</h1>
                            </header>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}