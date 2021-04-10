import style from '../styles/Services.module.scss';
import Link from 'next/link';

export function Services() {
    return (
        <>
            <Link href="pix">
                <a className={style.mainService}>
                    <div >
                        <h1>Pix</h1>
                    </div>
                </a>
            </Link>
            <Link href="transferencia">
                <div className={style.mainService}>
                    <h1>Transferência</h1>
                </div>
            </Link>
            <Link href="inserir-saldo">
                <div className={style.mainService}>
                    <h1>Inserir Saldo</h1>
                </div>
            </Link>
            <Link href="emprestimo">
                <div className={style.mainService}>
                    <h1>Empréstimo</h1>
                </div>
            </Link>
            <Link href="credito">
                <div className={style.mainService}>
                    <h1>Crédito</h1>
                </div>
            </Link>
            <Link href="dividas">
                <div className={style.mainService}>
                    <h1>Dívidas</h1>
                </div>
            </Link>
        </>
    );
}