import React from 'react';
import {Link} from "../";
import {Avatar} from "../";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        'justify-content': 'space-between',
    }
})

export const Header = (props) => {
    const classes = useStyles();

    const currentAvatar = 'https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

    return (
        <div className={classes.container}>
            <Link linkTo='/'>Главная</Link>
            <Link linkTo='/showcase'>Витрина</Link>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://81.177.165.218:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config'
            >swagger</a>
            <Link linkTo='/auth'><Avatar url={currentAvatar}/></Link>
        </div>
    )
}
