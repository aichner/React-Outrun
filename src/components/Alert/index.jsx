// React
import React from 'react'

// Original Alert
import { Alert as BootstrapAlert } from 'react-bootstrap';

// SCSS
import './alert.scss'

class Alert extends React.Component{
    
    render(){
        const { variant, children, strength } = this.props;

        return (
            <BootstrapAlert variant={variant}>{children}</BootstrapAlert>
        )
    }
}

export default Alert;
