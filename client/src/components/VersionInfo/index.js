import React from 'react';
import {createUseStyles} from 'react-jss'
import {Version} from "../../constants";

const useStyles = createUseStyles({
    container: {
        position: 'absolute',
        color: '#999',
        bottom: '0',
        right: '0',
        'font-size': '12px'
    }
});

export const VersionInfo = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            Client: {Version}
        </div>
    )
}
