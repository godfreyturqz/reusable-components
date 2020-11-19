import React from 'react'
import { data } from "./data";
import CardA from './CardA';
import CardB from './CardB';
import CardC from './CardC';
import CardD from './CardD';

function Cards() {
    return (
        <div>
            <br/>
            <CardA title={data.title}body={data.body}/>
            <br/>
            <CardB title={data.title}body={data.body}/>
            <br/>
            <CardC title={data.title}body={data.body}/>
            <br/>
            <CardD title={data.title}body={data.body}/>
            <br/>
        </div>
    )
}

export default Cards