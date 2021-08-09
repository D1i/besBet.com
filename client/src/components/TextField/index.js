import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        position: 'relative'
    },
    textField: {
        padding: '5px',
        outline: 'none',
        border: '2px solid #050',
        'border-radius': '5px',
        '&:focus': {
            'border-color': '#0b0'
        },
    },
    label: {
        position: 'absolute',
        padding: '0 5px',
        'margin-top': '-5px',
        'font-size': '12px',
        background: '#fff'

    }
});

export const TextField = (props) => {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.label}>{props.label}</div>
            <input className={classes.textField} {...props} />
        </div>
    )
}
