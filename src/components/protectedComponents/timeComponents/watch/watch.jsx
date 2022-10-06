import React from 'react'
import { useTimer } from '../timerHook/useTimer';
import styles from './watch.module.css';

export const Watch = () => {
    const {watch, showButton, start, pause} = useTimer(0);

  return (
    <div className={styles.outputDiv2}>
        <h1>{watch}</h1>        
        {
          showButton? <div><button className={styles.outputbutton1} onClick={()=> start()}>Start</button></div>
          : <div><button className={styles.outputbutton1} onClick={()=> pause()}>Stop</button></div>
        }  
    </div>
  )
};
