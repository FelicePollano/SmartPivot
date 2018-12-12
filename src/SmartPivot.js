import React from 'react'
import { withStyles } from '@material-ui/core/styles';

var styles={
    gridContainer:{
        backgroundColor:"CornSilk",
        position:"relative"
        
    },
    hscrollBarContainer:{
        backgroundColor:"Gray",
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"16px"
    },
    vscrollBarContainer:{
        backgroundColor:"Gray",
        position:"absolute",
        right:0,
        width:"16px",
        height:"100%"
    }
}

class PivotGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstVisibleCol:0,
            firstVisibleRow:0,
            componentSize:{height:props.height,width:props.width}
        };
    }
    render(){
        var sizeStyle = { 
            height:this.state.componentSize.height,
            width:this.state.componentSize.width
        }
        return (
        <div style={sizeStyle} className={this.props.classes.gridContainer}>
        <div>
        <div className={this.props.classes.vscrollBarContainer}>
        </div>
        <h2>The component {this.props.height}</h2>
        </div>
       
        <div className={this.props.classes.hscrollBarContainer}>
        </div>
        </div>
        );
    }
}

export default withStyles(styles,{name:"PivotGrid"})(PivotGrid)