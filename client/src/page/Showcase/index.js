import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { product } from "../../agent";

const useStyles = createUseStyles( {
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
} );

export const Showcase = ( props ) => {
    document.title = 'Витрина';
    const [productList, setProductList] = useState( [] );

    const callbackFromRes = ( req ) => {
        setProductList( req.data || [] );
    }

    useEffect( () =>
            product.get.all( callbackFromRes )
        , [] );

    const classes = useStyles();
    return (
        <div className={classes.container}>
            {productList.map( ( item ) => <div key={item.id}><b>{item.name}</b><span>{item.price}</span></div> )}
        </div>
    )
}
