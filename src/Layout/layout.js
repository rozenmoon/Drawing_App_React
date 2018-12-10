import React, {Component} from 'react'
import Aux from '../hoc/Aux'
import Toolbar from '../UI/ToolBar/Toolbar'
import Canvas from '../UI/Canvas/Canvas'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import Backdrop from '../UI/Backdrop/Backdrop'
import './layout.css'

class Layout extends Component {
    state={
        sideDrawerOpen: false,
        currentTask:"",
        volume: 0,
        shapeTask: "Rectangle",
        lineTask: "line"
    }

    SideDrawerToggle =(props) => {
        this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
    }

    SideDrawerOpen = (props) => {
        this.setState({sideDrawerOpen: true});
    }

    SideDrawerClose = (props) => {
        if(this.state.sideDrawerOpen)
            this.setState({sideDrawerOpen: false});
    }

    ToolBarClickListner = (task) => {
        this.setState({currentTask: task});
    }

    setSize = (size) => (
        this.setState({volume : size})
    )

    setShapeTask = (ShapeTask) => (
        this.setState({shapeTask: ShapeTask})
    )

    setLineTask = (LineTask) => (
        this.setState({lineTask: LineTask})
    )

    render(){
        return(
            <Aux>
                <SideDrawer open = {this.state.sideDrawerOpen} LineTask = {this.setLineTask} ShapeTask = {this.setShapeTask} Task = {this.state.currentTask} Size= {this.setSize} SideDrawerClose = {this.SideDrawerClose}/>
                <Backdrop show ={this.state.sideDrawerOpen} clicked = {this.SideDrawerClose}/>
                <Toolbar 
                    sideDrawerToggle={this.SideDrawerToggle} 
                    toolOption={this.ToolBarClickListner} 
                    Task={this.state.currentTask}
                    ToolClicked = {this.SideDrawerOpen}/>
                <Canvas Task={this.state.currentTask} size = {this.state.volume} ShapeTask={this.state.shapeTask} lineTask={this.state.lineTask} />
             </Aux>
        );
    }
}
export default Layout;