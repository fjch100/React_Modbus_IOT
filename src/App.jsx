import { useState } from 'react'
import './App.css'

import GridContainer from './components/GridContainer'

function App() {
  const [CoilsStates, setCoilsStates] = useState([true, false, false, true]);
  const [InputsStates, setInputsStates] = useState([false, true, true, true, false]);

  return (
    <>
      <GridContainer gridType="Coils" estados={CoilsStates} />
      <GridContainer gridType="Inputs" estados={InputsStates} />

      <p >
        Click on the Turn ON/OFF button to change the input or coil state
      </p>
    </>
  )
}

export default App
