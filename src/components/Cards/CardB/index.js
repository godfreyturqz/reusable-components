import React from 'react'
import './styles.css'

function CardB(props) {
    return (
        <div class="cardB">
            <div class="cardB-header">B - {props.title}</div>
            <div class="cardB-body">{props.body}</div>
        </div>
    )
}

export default CardB