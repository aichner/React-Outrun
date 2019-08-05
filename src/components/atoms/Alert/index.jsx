//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Bootstrap
// Import original bootstrap components
import {
    Alert as BootstrapAlert,
} from 'react-bootstrap';

//> CSS
// Local CSS
import './alert.scss';

class Alert extends React.Component{
    
    render(){
        const { variant, children, strength } = this.props;

        return (
            <BootstrapAlert variant={variant}>{children}</BootstrapAlert>
        )
    }
}

export default Alert;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
