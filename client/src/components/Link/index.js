import React from 'react';
import { Link as RouteLink } from 'react-router-dom';


export const Link = ( {
    children,
    linkTo
} ) => {
    return (
        <span>
            <RouteLink to={linkTo}>
                {children}
            </RouteLink>
        </span>
    )
}
