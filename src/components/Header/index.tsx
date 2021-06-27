import produtos from '../../../products.json'
import style from './style.module.css'
export function Header(){
    return(
        <>
            <a href="https://www.maujor.com/tutorial/propriedades-css-para-estilizacao-de-bordas.php" className={style.teste}>
                <div>
                    item 1
                </div>
            </a>
            <a href="https://www.maujor.com/tutorial/propriedades-css-para-estilizacao-de-bordas.php" className={style.teste}>item 2</a>
            <a href="https://www.maujor.com/tutorial/propriedades-css-para-estilizacao-de-bordas.php" className={style.teste}>item 3</a>

        </>
    );
}