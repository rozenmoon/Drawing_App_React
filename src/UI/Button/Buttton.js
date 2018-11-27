import React from 'react'
import classes from './Button.css'

const button = (props) => {
    return(<button style= {classes.Button} onClick = {props.bttnFun}>{props.children}</button>);
}
export default button;