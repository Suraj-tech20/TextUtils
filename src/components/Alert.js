import React from 'react'

export default function Alert(props) {
    const capatalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (

        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capatalize(props.alert.type)}:</strong> {props.alert.message}
            </div>}
        </div>
    )
}
