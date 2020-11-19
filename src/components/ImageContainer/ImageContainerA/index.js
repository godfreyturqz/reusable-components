import React from 'react'
import './styles.css'


function ImageContainerA(props) {
    return (
        <div className="imgContainerA">
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

export default ImageContainerA
