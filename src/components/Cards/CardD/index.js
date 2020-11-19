import React from 'react'
import './styles.css'

function CardD(props) {
    return (
        <div class="CardD">
            <div class="CardD-header">D - {props.title}</div>
            <div class="CardD-body">{props.body}</div>
        </div>
    )
}

export default CardD