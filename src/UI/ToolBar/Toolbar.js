import React from 'react'
import Button from '../Button/Buttton'
import classes from './Toolbar.module.css'
import PencilLogo from '../../assets/pencil.png'
import DrawerToggle from '../drawerToggle/drawerToggle'

const toolbar = (props) => {
    return(

        <header className = {classes.toolbar}>
            <div className = {classes.DrawerToggle}>
                <DrawerToggle/>
            </div>
            <div className = {classes.Tools}>
                <Button>Pencil</Button>
                <Button>Line</Button>
                <Button>Shape</Button>
                <Button>Erase</Button>
            </div>
            <div>
                <a></a>
            </div>

        </header>
    );

}
export default toolbar;