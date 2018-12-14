import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";


var style = {
    contentDiv:{
       
    }
}

const measureElement = element => {
    
    const DOMNode = ReactDOM.findDOMNode(element);
    return {
      width: DOMNode.offsetWidth,
      height: DOMNode.offsetHeight,
    };
  }

class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {size:{width:0,height:0}}
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount(){
        this.updateDimensions()
        window.addEventListener("resize",this.updateDimensions)
    }
    render(){
        return <div className={this.props.classes.contentDiv} >
        <h2>Body{this.state.size.width} - {this.state.size.height}
        </h2>
        <h3>this is another</h3>
        </div>
    }
    componentDidUnMount(){
        window.removeEventListener("resize",this.updateDimensions)
    }

    updateDimensions(){
        var m = measureElement(this)
              
        this.setState({size:{width:m.width,height:m.height}});
    }
   
}

export default withStyles(style,{name:"PivotGrid"})(Body)