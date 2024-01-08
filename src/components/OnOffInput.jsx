
import React, { useState } from 'react'
import classes from './OnOffInput.module.css';
import { FaPowerOff } from 'react-icons/fa';



function OnOffInput({ id, name, estado, onStateChange }) {

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

export default OnOffInput;