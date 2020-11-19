import React from 'react'
import './styles.css'

function ImageContainerB(props) {
    return (
        <div className="imgContainerB">
            <div className="imgWrapper">
                <img src={props.image}/>
            </div>
            <div className="imgContent">
                <h1 class="imgContent-header">{props.title}</h1>
                <div class="imgContent-body">{props.body}</div>
            </div>
        </div>
    )
}

export default ImageContainerB