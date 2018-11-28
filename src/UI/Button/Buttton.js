import React from 'react'
import classes from './Button.module.css'
import PencilLogo from '../../assets/pencil.png'

const button = (props) => {
    return(
    <li className= {classes.button}>
        <a onClick = {props.bttnFun}>{props.children}</a>
    </li>);
}
export default button;