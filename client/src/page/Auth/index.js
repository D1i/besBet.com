import React from 'react';
import {TextField, TextButton, Link} from "../../components";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        height: 'calc(95vh - 50px)',
        '& > div > input': {
            width: '200px',
            margin: '5px',
        }
    },
    btnContainer: {
        display: 'flex',
        width: '215px',
        'justify-content': 'space-between'
    }
});

export const Auth = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <TextField label='email' type="email" placeholder="Enter your Email"/>
            <TextField label='пароль' type="password" placeholder="Enter your password"/>
            <div className={classes.btnContainer}>
                <Link linkTo="/registration"><TextButton text="Зарегестрироваться"/></Link>
                <TextButton text="Войти"/>
            </div>
        </div>
    )
}
