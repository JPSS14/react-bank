import style from '../styles/PlansBox.module.scss';

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
                    <article className={style.mainPlansHelp}>
                        <header>
                            <h2>?</h2>
                        </header>
                    </article>
                    <article className={style.mainPlansArticle}>
                        <header>
                            <h2>Prata</h2>
                        </header>
                    </article>
                    <article className={style.mainPlansArticle}>
                        <header>
                            <h2>Ouro</h2>
                        </header>
                    </article>
                    <article className={style.mainPlansArticle}>
                        <header>
                            <h2>Platina</h2>
                        </header>
                    </article>
                </section>
            </div>
        </div>


        <div className={style.mainPlansBoxMobile}>
            <div className={style.mainPlansHeader}>
                <header>
                    <h1>Planos</h1>
                </header>
            </div>
        </div>
        </>
    );
}