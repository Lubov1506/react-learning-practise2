import { stringify } from 'query-string';
import React, {useState, useEffect} from 'react';
import {getUsers} from '../../api';
import { useData } from '../../hook/useData';


const Loader = () => {
    const {data: users, isFetching, error} = useData(getUsers);
    return (
        <>
        {isFetching && <div>Loading...</div>}
        {error && <div> Some Error happening </div>}
        <ol>
          {users.map((user, index) => (
            <li key={index}>{JSON.stringify(user)}</li>
          ))}
        </ol>
      </>
    );
}

export default Loader;
