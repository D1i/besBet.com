import React from 'react';
import { Link } from "../Link";

export const Header = ( props ) => {
    return (
        <div>
            <ul>
                <li><Link text='Главная' linkTo='/main'/></li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
