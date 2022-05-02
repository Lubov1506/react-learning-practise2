import React from 'react';
import { PersonContext } from '../../../../../contexts/Avatar';

const UlList = () => {
    return (
        <PersonContext.Consumer>
            {(contextValue) => {
                const {avatar, name, lastName}= contextValue;
                return (
        <ul style={{width:'200px', border: '3px solid black', padding: '25px'}}>Ul
            <li>Li</li>
            <li>Li</li>
            <li>
                   <img src={avatar} style={{width: '70px'}}/> {name} {lastName}
            </li>
        </ul>
    );    
            }}
        </PersonContext.Consumer>
    )

}

export default UlList;
