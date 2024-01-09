
import React, { useState } from 'react'
import classes from './OnOff.module.css';
import { FaPowerOff } from 'react-icons/fa';



function OnOff({ id, name, estado, onStateChange }) {
    // const [compState, setCompState] = useState(estado);

    let state = estado ? 'ON' : 'OFF';

    return (
        <div className={classes.componentContainer}>
            <div className={classes.componentName}>{name} - ({id})</div>
            <div name={name} className={classes.componentInnerContainer}>
                <button type="button" name={name} className={estado ? classes.IconContainerON : classes.IconContainerOFF} onClick={onStateChange}>
                    <span className={classes.icono} name={name}><FaPowerOff name={name} />
                    </span>
                </button>
                <div className={classes.componentState}>{state}</div>
            </div>
        </div>
    )
}

export default OnOff