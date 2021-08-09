import React from 'react';
import { Link as RouteLink } from 'react-router-dom';


export const Link = ( {
    text,
    linkTo
} ) => {
    return (
        <span>
            <RouteLink to={linkTo}>
                {text}
            </RouteLink>
        </span>
    )
}
