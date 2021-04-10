import style from '../styles/Services.module.scss';
import Link from 'next/link';

export function Services() {
    return (
        <>
            <Link href="/pix">
                <a className={style.mainService}>
                    <div>
                        <h1>Pix</h1>
                    </div>
                </a>
            </Link>
            <Link href="/transferencia">
                <a className={style.mainService}>
                    <div>
                        <h1>Transferência</h1>
                    </div>
                </a>
            </Link>
            <Link href="/inserir-saldo">
                <a className={style.mainService}>
                    <div>
                        <h1>Inserir Saldo</h1>
                    </div>
                </a>
            </Link>
            <Link href="/emprestimo">
                <a className={style.mainService}>
                    <div>
                        <h1>Empréstimo</h1>
                    </div>
                </a>
            </Link>
            <Link href="/credito">
                <a className={style.mainService}>
                    <div>
                        <h1>Crédito</h1>
                    </div>
                </a>
            </Link>
            <Link href="/dividas">
                <a className={style.mainService}>
                    <div>
                        <h1>Dívidas</h1>
                    </div>
                </a>
            </Link>
        </>
    );
}