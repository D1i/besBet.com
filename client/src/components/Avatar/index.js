import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( {
    avatar: {
        'border-radius': '50%',
        width: '50px',
        height: '50px'
    }
} );

export const Avatar = ( { url } ) => {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.avatar} src={url} alt="AVATAR"/>
        </div>
    )
}
