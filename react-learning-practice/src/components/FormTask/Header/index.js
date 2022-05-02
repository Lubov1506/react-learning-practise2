import React from 'react';

const Header = props => {
    const {buttonText, heading, pHeading} = props;
    return (
        <>
         
            <h1>{heading}</h1>
            <p>{pHeading}</p>
        </>
    );
}

export default Header;
