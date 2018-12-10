import React from 'react'
import classes from './SideDrawer.module.css'
import Erase from '../Tools/Erase/Erase'
import Line from '../Tools/Line/Line'
import Pencil from '../Tools/Pencil/Pencil'
import Shape from '../Tools/Shape/Shape'

const Sidedrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    const setSize = (size) => (
        props.Size(size)
    )

    const shapeSetTask = (task) => {
        props.ShapeTask(task)
    }

    const LineSetTask = (task) => {
        props.LineTask(task)
    }

    return(
        <div className={attachedClasses.join(' ')} >
            {
                props.Task === "Erase" ? <Erase  Size = {setSize}/> :
                (props.Task === "Pencil"? <Pencil  Size = {setSize}/>:
                (props.Task === "Shape" ? <Shape SideDrawerClose = {props.SideDrawerClose} ShapeTask = {shapeSetTask} Size = {setSize}/>:
                (props.Task === "Line"? <Line SideDrawerClose = {props.SideDrawerClose} LineTask = {LineSetTask} Size = {setSize}/>: <div/>)))
            }
        </div>
    );
}


export default Sidedrawer;