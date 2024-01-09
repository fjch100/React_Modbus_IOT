
import React, { useState } from 'react'
import classes from './OnOffInput.module.css';
import { FaPowerOff } from 'react-icons/fa';



function OnOffInput({ id, name, estado, onStateChange }) {

    let state = estado ? 'ON' : 'OFF';

    return (
        <div className={classes.componentContainer}>
            <div className={classes.componentName}>{name} - ({id})</div>
            <div name={name} className={classes.componentInnerContainer}>
                <button type="button" name={name} className={estado ? classes.IconContainerON : classes.IconContainerOFF} onClick={onStateChange}>
                    <span name={name} className={classes.icono}><FaPowerOff name={name} />
                    </span>
                </button>
                <div className={classes.componentState}>{state}</div>
            </div>
        </div>
    )
}

export default OnOffInput;