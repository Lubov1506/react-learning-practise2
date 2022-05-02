import React, { Component } from 'react';

class CountSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    plus = () => {
        this.setState((state, props)=>({
          count: state.count + props.step 
        }))
        
    }
    minus = () => {
        this.setState((state, props)=>({
          count: state.count - props.step 
        }))
    }
    render() {
        const {count}= this.state
        return (
            <div>
                <h1>Counter: {count}</h1>                
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default CountSecond;
