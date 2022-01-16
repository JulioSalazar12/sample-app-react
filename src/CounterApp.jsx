import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
    }
    const handleReset = () => {
        setCounter( value );
    }
    const handleDismis = () => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>Value: { value }</h2>
            <h2>Counter: { counter }</h2>

            <button onClick={ handleAdd }>Sample button +1</button>
            <button onClick={ handleReset }>Reset button</button>
            <button onClick={ handleDismis }>Dismis button -1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 5
}

export default CounterApp;