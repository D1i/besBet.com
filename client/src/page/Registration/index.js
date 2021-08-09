import React, {useState} from 'react';
import {TextField, TextButton} from "../../components";
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
    }
});

export const Registration = (props) => {
    const classes = useStyles();
    document.title = 'Регистрация';

    const [firstPasswordField, setFirstPasswordField] = useState('');
    const [secondPasswordField, setSecondPasswordField] = useState('');

    const handleChangeFirstPasswordField = (e) => {
        setFirstPasswordField(e.target.value)
    }

    const handleChangeSecondPasswordField = (e) => {
        setSecondPasswordField(e.target.value)
    }

    const registration = () => {
        if (firstPasswordField !== secondPasswordField) {
            console.log('ERROR')
        }
    }

    return (
        <div className={classes.container}>
            <TextField label='Email' type="email" placeholder="Enter your Email"/>
            <TextField label='Имя' type="text" placeholder="Enter your first name"/>
            <TextField label='Фамилия' type="text" placeholder="Enter your second name"/>
            <TextField label='Телефон' type="number" placeholder="Enter your phone"/>
            <TextField label='Пароль' onChange={handleChangeFirstPasswordField} type="password" placeholder="Enter your password"/>
            <TextField label='Повторите пароль' onChange={handleChangeSecondPasswordField} type="password" placeholder="Repeat your password"/>
            <TextButton onClick={registration} text="Зарегестрироваться"/>
        </div>
    )
}
