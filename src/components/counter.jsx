import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    // };

    render() { 
        // console.log(this.props);
        return(            
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.checkZero()}>Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    
    formatCount(){
        const count = this.props.counter.value;
        return this.props.counter.value === 0 ? "Zero" : count;
    }
    checkZero(){
        return this.props.counter.value === 0 ? "disabled" : "";
    }
   
}
 
export default Counter;