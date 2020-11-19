import React from 'react'
import './styles.css'

function CardA(props) {
    return (
        <div class="CardA">
            <div class="CardA-header">A - {props.title}</div>
            <div class="CardA-body">{props.body}</div>
        </div>
    )
}

export default CardA