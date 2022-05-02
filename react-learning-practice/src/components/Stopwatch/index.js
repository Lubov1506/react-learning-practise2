import React, {useState,  useEffect} from 'react';
import {format, addSeconds} from 'date-fns'

const Stopwatch = () => {
    const [time, setTime] = useState(new Date(0,0,0,0,0,0));
    const [isRunning, setIsRunning] = useState(false);

    const switchRunning = () => {

        setIsRunning(!isRunning)
    }

    let id = null;
    useEffect(()=> {

        if(isRunning){
         id = setTimeout(()=>{
            setTime(time=>addSeconds(time,1))
        }, 1000)
        return() => {
            clearTimeout(id);
        }    
        }
       
    }, [isRunning, time])

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{backgroundColor: 'lightgrey', color: 'red', width: '100px', padding: '5px'}}>{format(time, 'HH:mm:ss')}</div>
            <div>
            <button onClick={switchRunning}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={()=>{
                setTime(new Date(0,0,0,0,0,0))
            }}>Clear</button>                
            </div>

        </div>
    );
}

export default Stopwatch;
