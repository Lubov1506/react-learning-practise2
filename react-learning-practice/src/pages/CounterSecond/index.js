import React, { Component } from 'react';
import CountSecond from '../../components/CountSecond';

class CounterSecond extends Component { 
    constructor(props) {
    super(props);
    this.state = {
        step : ''
    }
}
inputHandler =({target: {name, value}})=> {
    this.setState({
    [name]: Number(value)
    })
}
    render() {
        return (
            <>
            <input type='range' 
            name='step'
            value={this.state.step}
            onChange={this.inputHandler}
            min='1'
            max='100'/>
            

            <CountSecond step={this.state.step}/>
            </>
        );
    }
}

export default CounterSecond;
