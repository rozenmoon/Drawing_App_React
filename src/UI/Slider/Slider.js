import React, {Component}from 'react'
import classes from'./Slider.module.css'


class Horizontal extends Component {

    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 10
      }
    } 
    handleChange = event => {
        this.setState({value: event.target.value},() => this.props.size(this.state.value*0.1));   
    };

    render () {
      const { value } = this.state
      return (
        <div className={classes.slidecontainer}>
            <p className={classes.childName}> {this.props.children}</p>
            <input type="range" min="1" max="100" value={this.state.value} className={classes.slider} onChange={this.handleChange}/> 
        </div>
      )
    }
  }
  
  export default Horizontal