import React, { useEffect, useState } from 'react'
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

const MbUrl = 'http://localhost:3000/api/modbus/';

function GridContainer({ gridType, estados }) {
    const [coils, setCoils] = useState(coilsArray);
    const [inputs, setInputs] = useState(inputsArray);
    const [error, setError] = useState(null);

    //read Coils initial value from modbusRTU
    useEffect(() => {
        let timer = setInterval(() => {
            getCoils();
            sleepMs(200);
            getInputs();
        }, 500)

        return () => {
            clearInterval(timer);
        }
    }, [])

    const getCoils = async () => {
        try {
            const response = await fetch(MbUrl + 'readcoils');
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            console.log(response);
            const data = await response.json();
            console.log(data);
            let newCoils = [...coils];
            let fetchedCoils = data.data;
            for (let i = 0; i < newCoils.length; i++) {
                newCoils[i].state = fetchedCoils[i];
            }
            setCoils(newCoils)
        } catch (error) {
            setError(error.message);
        }

        // let newCoils = [...coils];
        // let fetchedCoils = data.data;
        // for (let i = 0; i < newCoils.length; i++) {
        //     newCoils[i].state = fetchedCoils[i];
        // }
        // setCoils(newCoils)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     let newCoils = [...coils];
        //     let fetchedCoils = data.data;
        //     for (let i = 0; i < newCoils.length; i++) {
        //         newCoils[i].state = fetchedCoils[i];
        //     }
        //     setCoils(newCoils)

        // });
    }

    const getInputs = async () => {
        try {
            const response = await fetch(MbUrl + 'readinputs');
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            console.log(response);
            const data = await response.json();
            console.log(data);
            let newInputs = [...inputs];
            let fetchedInputs = data.data;
            for (let i = 0; i < newInputs.length; i++) {
                newInputs[i].state = fetchedInputs[i];
            }
            setInputs(newInputs);
        } catch (error) {
            setError(error.message);
        }
    }


    const sleepMs = async (ms) => {
        await new Promise(r => setTimeout(r, ms));
    }

    function coilStateHandler(event) {
        // console.log(event.target);
        let el = event.target.attributes.name || event.target.parentElement.attributes.name;
        if (!el) {
            return;
        }
        //get the coil number from  el= "Coil0" => "0"
        let coilNumber = Number(el.nodeValue[4])//
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
