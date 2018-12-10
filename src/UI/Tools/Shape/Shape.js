import React, {Component} from 'react'
import Slider from '../../Slider/Slider'
import Button from '../../Button/Buttton'

const Shape = (props) => {

    const setSize = (size) => (
        props.Size(size)
    )
    
    const setTask = (task) => {
        props.ShapeTask(task);
        props.SideDrawerClose();
    }

    return(
        <div>
            <Slider size = {setSize}>Size</Slider>
            <Button bttnFun = {() => setTask("Circle")}> Circle</Button>
            <Button bttnFun = {() => setTask("Rectangle")}> Rectangle</Button>
        </div>
        );
    }

export default Shape;