import React from 'react';
import { Link } from "../";
import { Avatar } from "../";

export const Header = ( props ) => {
    const currentAvatar = 'https://abudhabitiming.com/wp-content/uploads/2020/01/test-img.jpg';

    return (
        <div>
            <Link linkTo='/'>Главная</Link>
            <Link linkTo='/profile'><Avatar url={currentAvatar} /></Link>
        </div>
    )
}
