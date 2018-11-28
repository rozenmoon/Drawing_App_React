import React from 'react'
import Aux from '../hoc/Aux'
import Toolbar from '../UI/ToolBar/Toolbar'
import Canvas from '../UI/Canvas/Canvas'
import SideDrawer from '../UI/SideDrawer/SideDrawer'


const layout = (props) => {
    return(
        <Aux>
            <SideDrawer/>
            <Toolbar/>
            <Canvas/>
         </Aux>
    );
}

export default layout;