import React from 'react'
import Button from '../Button/Buttton'
import classes from './Toolbar.css'
import Aux from '../../hoc/Aux'

const toolbar = (props) => {
    return(
        <Aux className = {classes.Toolbar}>
            <Button>Pencil</Button>
            <Button>Line</Button>
            <Button>Shape</Button>
            <Button>Erase</Button>
        </Aux>
    );

}
export default toolbar;