import React from 'react'
import classes from './SideDrawer.module.css'

const Sidedrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <div className={attachedClasses.join(' ')}>
            <a>fhdfvidf</a>
            <a>fvdfbtgbh</a>
            <a>rozen</a>
        </div>
    );
}

export default Sidedrawer;