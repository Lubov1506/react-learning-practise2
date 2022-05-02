import React, {useState, useEffect} from 'react';
import {getUsers} from '../api'

export function useData (){
    const [data, setData]= useState([]);
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(false);

    useEffect(()=> {
       getUsers()
        .then(data => {
            setData(data);
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setIsFetching(false);
        });
    }, [])
    return {
        data, isFetching, error
    }
}
