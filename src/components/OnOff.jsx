
import React, { useState } from 'react'
import classes from './OnOff.module.css';
import { FaPowerOff } from 'react-icons/fa';



function OnOff({ id, name, estado, onStateChange }) {
    // const [compState, setCompState] = useState(estado);

    let state = estado ? 'ON' : 'OFF';

    return (
        <div className={classes.componentContainer}>
            <div className={classes.componentName}>{name} - ({id})</div>
            <div className={classes.componentInnerContainer}>
                <div className={estado ? classes.IconContainerON : classes.IconContainerOFF} onClick={onStateChange}>
                    <span className={classes.icono}><FaPowerOff />
                    </span>
                </div>
                <div className={classes.componentState}>{state}</div>
            </div>
        </div>
    )
}

export default OnOff