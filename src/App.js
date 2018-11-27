import React,{ Component} from 'react';
import './App.css';
import Layout from '../src/Layout/layout'

class App extends Component{

    constructor(props) {
        super(props);
        this.funStartHandeller = this.funStartHandeller.bind(this);
        this.funMoveHandeller = this.funMoveHandeller.bind(this);
        this.funEndHeandeller = this.funEndHeandeller.bind(this);
        this.pencilHandeller = this.pencilHandeller.bind(this);
        this.ActivationFuncHandeller = this.ActivationFuncHandeller.bind(this);
    }

    state = {
        task : "Nan",
        start_point:{X:0,Y:0},
        end_point:{X:0,Y:0},
        mouseDown: false,
        current_state: NaN,
        one_step_back: NaN
    }

    componentDidMount(){
        this.canvas= document.getElementById("myCanvas");
        // this.ctx = this.canvas.getContext("2d");
    }

    ActivationFuncHandeller = (event) => {
        if(this.state.task === "Line")
        {
            console.log("Line");
        }
        if(this.state.task === "Circle")
        {
            console.log("Circle");
        }
        if(this.state.task === "Erase")
        {
            console.log("Erase");
        }
        if(this.state.task === "HandLine")
        {
            return this.pencilHandeller(event);
        }
    }

    pencilHandeller(event)
	{
		// this.setState({start_point: this.state.end_point});
		// this.setState({end_point: {X: event.clientX,Y: event.clientY}});
		// this.ctx.beginPath();
		// this.ctx.moveTo(this.state.start_point.X,this.state.start_point.Y);
		// this.ctx.lineTo(this.state.end_point.X,this.state.end_point.Y);
		// this.ctx.stroke();
		// this.setState({current_state : this.ctx.getImageData(0,0,500,500)});
    }
        
    // clearCanvasHandeller = () => {
    //     this.setState(
    //         this.state.current_state = this.state.one_state_back,  
    //         this.ctx.clearRect(0,0,500,500),
    //         this.ctx.putImageData(this.state.current_state,0,0));

    // }

    
    currentEventHandeller = (tsk) => {
        this.setState( {task : tsk }, () => console.log(this.state.task) );
    }

    funStartHandeller = (event) => {
        this.setState({
        //     one_step_back : this.ctx.getImageData(0,0,500,500),
        //     mouseDown : true,
        //     start_point:{X:event.clientX,Y:event.clientY},
        //     end_point:{X:event.clientX,Y:event.clientY}});
        // this.ActivationFuncHandeller(event);
    })}

    funMoveHandeller = (event) => {
        // if(this.state.mouseDown)
        // {
        //     this.ActivationFuncHandeller(event);
        // }
    }

    funEndHeandeller = (event) => {
        // this.ActivationFuncHandeller(event);
        // this.setState({mouseDown : false});
        // this.clearCanvasHandeller();
    }


    render(){


    return(
        <Layout/>
        );
    }

}

export default App;

{/* <div>
<button onClick= {() => this.currentEventHandeller("Line")}> Line</button>
<button onClick= {() => this.currentEventHandeller("Circle")}> Circle</button>
<button onClick= {() => this.currentEventHandeller("Erase")}> Erase</button>
<button onClick= {() => this.currentEventHandeller("HandLine")}> Handline</button>
<div>
<canvas id ="myCanvas" className ="DrawingArea" 
    onMouseDown= { this.funStartHandeller()} 
    onMouseMove = { this.funMoveHandeller} 
    onMouseUp= { this.funEndHeandeller} > </canvas>
</div>  
</div> */}