import React from 'react';
import Aside from './Aside';
import Header from './Header';

const Container = (props) => {
    return (
        <div style={{border: '3px solid black', padding: '25px'}}> 
        Container
            <Header/>
            <Aside/>
        </div>
    );
}

export default Container;
