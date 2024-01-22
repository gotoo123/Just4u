import React from 'react';
import style from './index.less';

const DayAndNight = () => {

  const [state, setState] = React.useState('dark');
  const handleClick = () => {
    setState(state === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={style.dayAndNight} onClick={handleClick}>
      <div className={state}>
        <div className="bg"/>
        <div className="moon-box">
          <div className="moon"/>
        </div>
        <div className="sun-box">
          <div className="sun"/>
        </div>
        <div className="sea"/>
      </div>
    </div>
  )
}

export default DayAndNight;