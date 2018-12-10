import React, {Component} from 'react'
import Button from '../Button/Buttton'
import classes from './Toolbar.module.css'
import PencilLogo from '../../assets/pencil.png'
import DrawerToggle from '../drawerToggle/drawerToggle'

class Toolbar extends Component {
    
    ToolSelect = (Tool) => {
        this.props.toolOption(Tool)
        this.props.ToolClicked();
    }


    render(){
        return(
            <header className = {classes.toolbar}>
                <div className = {classes.DrawerToggle}>
                    <DrawerToggle clicked = {this.props.sideDrawerToggle}/>
                </div>
                <div className = {classes.Tools}>
                    <Button 
                        bttnFun= {() => { this.ToolSelect("Line")} } 
                        active = {this.props.Task === "Line"? true: false}>Line</Button>
                    <Button 
                        bttnFun= {() => { this.ToolSelect("Pencil") }} 
                        active = {this.props.Task === "Pencil"? true: false}>Pencil</Button>
                    <Button 
                        bttnFun= {() => { this.ToolSelect("Shape") }} 
                        active = {this.props.Task === "Shape"? true: false}>Shape</Button>
                    <Button 
                        bttnFun= {() => { this.ToolSelect("Erase") }} 
                        active = {this.props.Task === "Erase"? true: false}>Erase</Button>
                </div>
                <div>
                    <a></a>
                </div>
    
            </header>
        );
    }

}
export default Toolbar;