import React from 'react'
import './styles.css'

function CardC(props) {
    return (
        <div class="CardC">
            <div class="CardC-header">C - {props.title}</div>
            <div class="CardC-body">{props.body}</div>
        </div>
    )
}

export default CardC