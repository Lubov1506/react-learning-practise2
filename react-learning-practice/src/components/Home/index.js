import React, { useState, useContext, useCallback, useEffect, useMemo } from 'react';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import HomeChild from '../HomeChild';
const { THEMES } = CONSTANTS;

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
  },  
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white',
  },

};
function computeValue  (num) {
  return num **3;
}

const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [value, setValue] = useState(1);

/*   const switchTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  }; */
  const switchTheme = useCallback(() => {
    setTheme(theme => (theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  }, []);
  //const logValue = () => console.log(value);
  const logValue = useCallback(() => (console.log(value)), [value]);

/*   useEffect(() => {
    console.log('update');
  }, [logValue]); */

/*   const changeValue = ({ target: { value } }) => {
    setValue(Number(value));
  }; */
  const changeValue = useCallback( ({ target: { value } }) => {
    setValue(Number(value))
  }, []);

  const layoutValue = useMemo(()=>computeValue(value), [value]);
  

  return (
    <div style={stylesMap[theme]}>
      <h1>{layoutValue}</h1>
      <input type='number' value={value} onChange={changeValue} />
      <button onClick={switchTheme}>Switch theme</button>
      <HomeChild callback={logValue} />
    </div>
  );
};

export default Home;
