import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( { saludo } ) => {

    // const saludo = 'Primera app';

    return (
        <>
        <h1>{ saludo }</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Consequatur, dolor commodi dolorum odio minima cum nostrum porro illum enim laboriosam.</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: 'Default saludo'
}

export default PrimeraApp;