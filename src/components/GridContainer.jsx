import React, { useState } from 'react'
import classes from './GridContainer.module.css'
import OnOff from './OnOff'
import OnOffInput from './OnOffInput';

let coilsArray = [
    { name: "Coil0", id: "%Q0.0", state: false },
    { name: "Coil1", id: "%Q0.1", state: false },
    { name: "Coil2", id: "%Q0.2", state: false },
    { name: "Coil3", id: "%Q0.3", state: false }
];

let inputsArray = [
    { name: "Dig_In0", id: "%I0.0", state: false },
    { name: "Dig_In1", id: "%I0.1", state: false },
    { name: "Dig_In2", id: "%I0.2", state: false },
    { name: "Dig_In3", id: "%I0.3", state: false },
    { name: "Dig_In4", id: "%I0.4", state: false }
];


function GridContainer({ gridType, estados }) {
    const [coils, setCoils] = useState(coilsArray);
    const [inputs, setInputs] = useState(inputsArray);

    function coilStateHandler(event) {
        // console.log(event.target);
        let el = event.target.attributes.name || event.target.parentElement.attributes.name;
        if (!el) {
            return;
        }
        let coilNumber = Number(el.nodeValue[4])
        // console.log(coilNumber);
        let Coils = [...coils];
        Coils[coilNumber].state = !Coils[coilNumber].state
        setCoils(Coils);
    }

    function inputStateHandler(event) {
        // console.log(event.target);
        let el = event.target.attributes.name || event.target.parentElement.attributes.name;
        if (!el) {
            return;
        }
        let inputNumber = Number(el.nodeValue[6])
        // console.log(coilNumber);
        let Inputs = [...inputs];
        Inputs[inputNumber].state = !Inputs[inputNumber].state
        setInputs(Inputs);
    }

    let content;
    if (gridType === 'Coils') {
        content = <div className={classes.gridContainer}>
            {coils.map((coil) =>
                <OnOff key={coil.id} name={coil.name} id={coil.id} estado={coil.state} onStateChange={coilStateHandler} />
            )}
        </div>;
    }

    if (gridType === 'Inputs') {
        content = <div className={classes.gridContainer}>
            {inputs.map((input) =>
                <OnOffInput key={input.id} name={input.name} id={input.id} estado={input.state} onStateChange={inputStateHandler} />
            )}
        </div>;
    }

    return (
        <div className={classes.gridHeaderAll} >
            <div className={classes.gridHeader}>
                <h3>{gridType}</h3>
            </div>
            {content}
        </div >
    )
}

export default GridContainer;
