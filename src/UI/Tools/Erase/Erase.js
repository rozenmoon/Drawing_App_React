import React from 'react'
import Slider from '../../Slider/Slider'

const Erase = (props) => {

    const setSize = (size) => (
        props.Size(size)
    )

    return(
        <div>
            <Slider size = {setSize}>Size</Slider>
        </div>
        );
    };


export default Erase;