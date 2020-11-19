import React from 'react'
import { data } from "./data";
import imgSrc from "./sample.png";
import ImageContainerA from './ImageContainerA';
import ImageContainerB from './ImageContainerB';


function AllImageContainers() {
    return (
        <div>
            <br/>
            <ImageContainerA title={data.title} body={data.body} image={imgSrc}/>
            <br/>
            <ImageContainerB title={data.title} body={data.body} image={imgSrc}/>
        </div>
    )
}

export default AllImageContainers