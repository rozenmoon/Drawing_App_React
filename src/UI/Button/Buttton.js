import React from 'react'
import classes from './Button.module.css'

const button = (props) => {
    return(
    <li className= {classes.button}>
        <a className={props.active ? classes.active: null} onClick = {props.bttnFun}>{props.children}</a>
    </li>);
}
export default button;