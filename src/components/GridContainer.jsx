import React from 'react'
import classes from './GridContainer.module.css'
import OnOff from './OnOff'
import OnOffInput from './OnOffInput';

let coils = [
    { name: "Coil0", id: "%Q0.0" },
    { name: "Coil1", id: "%Q0.1" },
    { name: "Coil2", id: "%Q0.2" },
    { name: "Coil3", id: "%Q0.3" }
];

let inputs = [
    { name: "Dig_In0", id: "%I0.0" },
    { name: "Dig_In1", id: "%I0.1" },
    { name: "Dig_In2", id: "%I0.2" },
    { name: "Dig_In3", id: "%I0.3" },
    { name: "Dig_In4", id: "%I0.4" }
];


function GridContainer({ gridType, estados }) {
    let content;
    if (gridType === 'Coils') {
        content = <div className={classes.gridContainer}>
            <OnOff name={coils[0].name} id={coils[0].id} estado={estados[0]} />
            <OnOff name={coils[1].name} id={coils[1].id} estado={estados[1]} />
            <OnOff name={coils[2].name} id={coils[2].id} estado={estados[2]} />
            <OnOff name={coils[3].name} id={coils[3].id} estado={estados[3]} />
        </div>;
    }
    if (gridType === 'Inputs') {
        content = <div className={classes.gridContainer}>
            <OnOffInput name={inputs[0].name} id={inputs[0].id} estado={estados[0]} />
            <OnOffInput name={inputs[1].name} id={inputs[1].id} estado={estados[1]} />
            <OnOffInput name={inputs[2].name} id={inputs[2].id} estado={estados[2]} />
            <OnOffInput name={inputs[3].name} id={inputs[3].id} estado={estados[3]} />
            <OnOffInput name={inputs[4].name} id={inputs[4].id} estado={estados[4]} />
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
