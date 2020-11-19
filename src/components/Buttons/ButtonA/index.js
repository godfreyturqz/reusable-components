import React from 'react'
import './styles.css'

function ButtonA(props) {
    return (
        <button className="ButtonA">{props.children}</button>
    )
}

export default ButtonA
