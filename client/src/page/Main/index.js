import React from 'react';
import {Link} from "../../components";

export const Main = (props) => {
    document.title = 'Главная';

    return (
        <div>
            <h1>Обновления клиента</h1>
            <ul>
                <li>
                    <div>
                        <h2>Добавлена страница регистрации и входа</h2>
                        <div>Client: <i>0.0.1</i></div>
                        <span>Добавлена страница регистрации и входа. <b>Связи с бэком пока нет</b></span>
                        <div>Перейти на страницу:
                            <div><Link linkTo='/registration'>Регистрации</Link></div>
                            <div><Link linkTo='/auth'>Входа</Link></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
