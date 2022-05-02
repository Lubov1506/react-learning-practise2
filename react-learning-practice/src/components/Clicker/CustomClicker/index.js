import React, { useState, useEffect, useCallback } from 'react';
import { useClicker } from '../../../hook/useClicker';

const CustomClicker = () => {
  const counter = useClicker()
  return (
    <div>
      <h1>Counter: {counter}</h1>
  
      <button>Increment</button>
    </div>
  );
};

export default CustomClicker;
