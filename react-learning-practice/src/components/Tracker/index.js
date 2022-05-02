/* import React, {useState} from 'react';

const Home = () => {
    const [counter, setCounter] = useState(1);
    const [step, setStep] = useState(1);

    const handler = () => {
        setCounter( counter +step )
    }
    const changeHandler = (event) => {
        setStep(Number(event.target.value))
    }

    return (
        <div>
            <h1>{counter}</h1>
            <input type='range' name='step' value={step} onChange={changeHandler} />
            <button onClick={handler}>Click</button>
        </div>
    );
}

export default Home;  */


import React, {useState, useEffect} from 'react';

const Tracker = () => {
    const [coordinates, setCoordinates] = useState({
                                x:0,
                                y:0,
                                    })
    const [counter, setCounter] = useState(0)

    const handleMouseMove = ({clientX, clientY}) => {
        setCoordinates({
            x: clientX,
            y: clientY
        })
    }
    useEffect ( () =>{
      document.addEventListener('click', handleMouseMove);
      
     return () => {
  
        document.removeEventListener('click', handleMouseMove)
     }
    }
    )
       return (
        <div style={{height: '100vh', border: '4px solid red'}} onMouseMove={handleMouseMove} >
            <h1>Mouse Tracker</h1>
            <h3>x: {coordinates.x}</h3>
            <h3>y: {coordinates.y}</h3>
        </div>
    );
}

export default Tracker;
