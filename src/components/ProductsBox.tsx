import style from '../styles/Products.module.scss';

export function ProductsBox() {
    return (
        <section className={style.mainProducts}>
            <header className={style.sectionHeader}>
                <h1>Produtos</h1>
            </header>

            <article>
                <header>
                    <h2>Smartphones</h2>
                </header>
            </article>

            <article>
                <header>
                    <h2>Carros</h2>
                </header>
            </article>

            <article>
                <header>
                    <h2>Casas</h2>
                </header>
            </article>

            <article>
                <header>
                    <h2>Viagens</h2>
                </header>
            </article>
        </section>
    );
}