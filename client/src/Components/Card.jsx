import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <>
            {props.image && <img src={props.image} height="500" width="380" />}
        </>
    )
}
