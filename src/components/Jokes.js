import React from 'react'

function Jokes (props) {
    return (
        <div>
    <h3 style = {{display: !props.question && "none"}}>Question: {props.question}</h3>
    <h3 style = {{color: !props.question && "gray"}}>Answer: {props.answer}</h3>
    </div>
    )
}
export default Jokes