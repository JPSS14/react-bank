import style from '../styles/Products.module.scss';
import Link from 'next/link';

export function ProductsBox() {
    return (
        <section className={style.mainProducts}>
            <header className={style.sectionHeader}>
                <h1>Produtos</h1>
            </header>

            <Link href="/smartphones">
                <a className={style.mainProductsArticle}>
                    <article>
                        <header>
                            <img src="/smartphones-main-products.jpg" alt="Smartphones" title="Smartphones" />
                            <h2>Smartphones</h2>
                        </header>
                    </article>
                </a>
            </Link>

            <Link href="/carros">
                <a className={style.mainProductsArticle}>
                    <article>
                        <header>
                            <img src="/cars-main-products.jpg" alt="Carros" title="Carros" />
                            <h2>Carros</h2>
                        </header>
                    </article>
                </a>
            </Link>

            <Link href="/casas">
                <a className={style.mainProductsArticle}>
                    <article>
                        <header>
                            <img src="/houses-main-products.jpg" alt="Casas" title="Casas" />
                            <h2>Casas</h2>
                        </header>
                    </article>
                </a>
            </Link>

            <Link href="/viagens">
                <a className={style.mainProductsArticle}>
                    <article>
                        <header>
                            <img src="/travel-main-products.jpg" alt="Viagens" title="Viagens" />
                            <h2>Viagens</h2>
                        </header>
                    </article>
                </a>
            </Link>

        </section>
    );
}