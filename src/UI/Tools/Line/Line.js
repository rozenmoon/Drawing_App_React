import React from 'react'
import Slider from '../../Slider/Slider'
import Button from '../../Button/Buttton'

const Line = (props) => {

    const setSize = (size) => (
        props.Size(size)
    )

    const setTask = (task) => {
        props.LineTask(task);
        props.SideDrawerClose();
    }

    return(
        <div>
            <Slider size = {setSize}>Size</Slider>
            <Button bttnFun = {() => setTask("line")}>Line</Button>
            <Button bttnFun = {() => setTask("quardLine")}>QuardLine</Button>
        </div>
        );
    };

export default Line;