import style from '../styles/Services.module.scss';

export function Services() {
    return (
        <>
            <div className={style.mainPix}>
                <h1>Pix</h1>
            </div>
            <div className={style.mainPix}>
                <h1>Transferência</h1>
            </div>
            <div className={style.mainPix}>
                <h1>Inserir Saldo</h1>
            </div>
        </>
    );
}