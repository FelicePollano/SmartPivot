import React from 'react'
import { withStyles } from '@material-ui/core/styles';

var styles={
    pivotGridContainer:{
        backgroundColor:"blue",
        
        minHeight:300
    }
}

class PivotGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {firstVisibleCol:0,firstVisibleRow:0};
    }
    render(){
        return (
        <div className={this.props.classes.pivotGridContainer}>
        <div>
        <h2>The component</h2>
        </div>
        <div className="this.props.classes.pivotGridContainer"></div>
        </div>
        );
    }
}

export default withStyles(styles,{name:"PivotGrid"})(PivotGrid)