import React, {Component} from 'react'
import classes from './Canvas.css'
import Erase from '../Tools/Erase/Erase'


class Canvas extends Component {
    state= {
        mousedown: false,
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        one_state_back: null,
        current_state: null,

        quardStartX: 0,
        quardStartY: 0,
        activity: false
    }

    canvas;
    ctx;

    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        const statei = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
        this.setState(() => ({one_state_back: statei, current_state: statei}));
    }

    toggleActivityHandeller = () => (!this.state.activity);



    MouseDown = (e) => {
        e.persist();
        const statei = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
        this.setState({ mousedown : true, startX: e.nativeEvent.offsetX, startY: e.nativeEvent.offsetY, one_state_back: statei, endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY});
    }

    MouseMove = (e) => {
        e.persist();
        if(this.state.mousedown)
        {
            if(this.props.Task == "Line" || this.props.Task == "Shape")
            {
                this.clearCanvas();
            }
            this.activationFunction(e);
        }
    }

    MouseUp = (e) => {

        if(this.props.Task == "Line" || this.props.Task == "Shape")
        {
            this.clearCanvas();
        }

        e.persist();
        this.setState({activity: false ,mousedown: false, endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY}, () => (this.activationFunction(e)));
    }

    activationFunction = (e) => {
        if(this.props.Task === "Line")
        {
            if(this.props.lineTask === "line")
            {
                return(this.drawLine(e));
            }
            else if(this.props.lineTask === "quardLine")
                return(this.drawQuard(e));
        }

        else if(this.props.Task === "Pencil")
        {
            return(this.pencil(e));
        }
        else if(this.props.Task === "Shape")
        {   
            if(this.props.ShapeTask === "Rectangle")
                return(this.drawRect(e));
            else if(this.props.ShapeTask === "Circle")
                return(this.drawCircle(e));
        }
        else if(this.props.Task === "Erase")
        {
            return(this.eraser(e));
        }
    }

    clearCanvas = () => {
        this.setState(() => ({current_state : this.state.one_state_back}));
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.putImageData(this.state.one_state_back,0,0);
    }

    drawLine = (e) => {
        console.log("is here");
        e.persist();
        this.setState({endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY}, () => { 
            this.ctx.beginPath();
            this.ctx.moveTo(this.state.startX,this.state.startY);
            this.ctx.lineTo(this.state.endX,this.state.endY);
            this.ctx.lineWidth = this.props.size;
            this.ctx.stroke();
        });		

        this.setState(() => ({current_state : this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}));
    }

    drawCircle = (e) =>{
        console.log("Circle");
        e.persist();
        this.setState({endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY}, () => {
            this.ctx.beginPath();
            this.ctx.arc(this.state.startX,this.state.startY,this.Distance(),0,2*Math.PI);
            this.ctx.lineWidth = this.props.size;
            this.ctx.stroke();
        });
        this.setState(() => ({current_state : this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}));
    }

    drawRect = (e) => {
        e.persist();
        this.setState({endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY},()=> {
            this.ctx.beginPath();
            this.ctx.rect(this.state.startX,this.state.startY, (this.state.endX-this.state.startX),(this.state.endY-this.state.startY));
            this.ctx.lineWidth = this.props.size;
            this.ctx.stroke();
        });
        this.setState(() => ({current_state : this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}));
    }

    drawQuard = (e) => {
        e.persist();
        this.setState({quardStartX: e.nativeEvent.offsetX, quardStartY: e.nativeEvent.offsetY},()=> {
            this.ctx.beginPath();
            this.ctx.moveTo(this.state.startX,this.state.startY);
            this.ctx.quadraticCurveTo(this.state.quardStartX,this.state.quardStartY,this.state.endX,this.state.endY);
            this.ctx.lineWidth = this.props.size;
            this.ctx.stroke();  
        }); 
        this.setState(() => ({current_state : this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}));
    }


    pencil = (e) => {
        e.persist();
        this.setState({startX: this.state.endX, startY: this.state.endY, endX: e.nativeEvent.offsetX, endY: e.nativeEvent.offsetY}, () => {
            this.ctx.beginPath();
            this.ctx.moveTo(this.state.startX,this.state.startY);
            this.ctx.lineTo(this.state.endX,this.state.endY);
            this.ctx.lineWidth = this.props.size;
            this.ctx.stroke();
        });
        this.setState(() => ({current_state : this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}));     
    }


    Distance = () => {
        const radius = Math.sqrt(Math.pow( this.state.startX - this.state.endX,2) + Math.pow( this.state.startY - this.state.endY,2));
        console.log(radius);
        return radius;
    }

    eraser = (e) => {
        e.persist();
        this.ctx.clearRect(e.nativeEvent.offsetX,e.nativeEvent.offsetY,this.props.size*10,this.props.size*10);    
    }

 render(){

    return(<canvas 
            ref = "canvas" 
            className= {classes.Canvas} 
            onMouseDown ={this.MouseDown} 
            onMouseMove= {this.MouseMove} 
            onMouseUp={this.MouseUp} ></canvas>);

    }   

}
export default Canvas;