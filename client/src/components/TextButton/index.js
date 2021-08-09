import React from 'react';
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
    button: {
        padding: '5px 10px',
        outline: 'none',
        border: 'none',
        'border-radius': '5px',
        background: '#050',
        color: '#fff',
        '&:active': {
            background: '#0b0'
        }
    }
});

export const TextButton = (props) => {
    const classes = useStyles();
    return (
        <button {...props} className={classes.button}>{props.text}</button>
    )
}
