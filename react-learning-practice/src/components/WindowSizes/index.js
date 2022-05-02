import React, { Component } from 'react';

class WindowSizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
    componentDidMount (){
        window.addEventListener('resize', this.resizeHandler);
    }
    resizeHandler = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    componentWillUnmount (){
        window.removeEventListener('resize', this.resizeHandler);
    }
    render() {
 
        const {width, height}= this.state;
        return (
            <div onChange={this.getCurrentSize}>
                <p>Current viewport width: {width}px</p>
                <p>Current viewport height: {height}px</p>
            </div>
        );
    }
}

export default WindowSizes;
