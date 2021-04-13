import style from '../styles/main.module.scss';
import Link from 'next/link';

export function Ops() {
    return (
        <>
            <main className={style.main}>
                <div className={style.mainOps}>
                    <header>
                        <h1>Ops!</h1>
                    </header>
                    <p>Você não está logado e não é permitido acessar páginas via url, mas não fique preocupado acesse este <Link href="/"><a>link</a></Link> e volte ao login do React Bank!</p>
                </div>
            </main>
        </>
    );
}