import style from '../styles/Products.module.scss';

export function ProductsBox() {
    return (
        <section className={style.mainProducts}>
            <header className={style.sectionHeader}>
                <h1>Produtos</h1>
            </header>

            <article className={style.mainProductsArticle}>
                <header>
                    <img src="/smartphones-main-products.jpg" alt="Smartphones" title="Smartphones" />
                    <h2>Smartphones</h2>
                </header>
            </article>

            <article className={style.mainProductsArticle}>
                <header>
                    <img src="/cars-main-products.jpg" alt="Carros" title="Carros" />
                    <h2>Carros</h2>
                </header>
            </article>

            <article className={style.mainProductsArticle}>
                <header>
                    <img src="/houses-main-products.jpg" alt="Casas" title="Casas" />
                    <h2>Casas</h2>
                </header>
            </article>

            <article className={style.mainProductsArticle}>
                <header>
                    <img src="/travel-main-products.jpg" alt="Viagens" title="Viagens" />
                    <h2>Viagens</h2>
                </header>
            </article>
        </section>
    );
}