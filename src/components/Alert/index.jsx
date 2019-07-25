// React
import React from 'react'

import { Alert as BootstrapAlert } from 'react-bootstrap';

class Alert extends React.Component{
    
    render(){
        const { variant, children } = this.props;
        console.log(this.props);

        return (
            <BootstrapAlert variant={variant}>{children}</BootstrapAlert>
        )
    }
}

export default Alert;
