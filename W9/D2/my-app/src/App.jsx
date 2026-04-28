import { useState } from 'react'

import './App.css'
import { FunctionaName } from './components/FunctionalCompOne.jsx'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'
import { ClassComponentState } from './components/ClassComponentState.jsx'
function App() {
  return (
    //Fragment in react : <> </>
    <>
      {/* <FunctionaName />{/*Component name */}
      {/* <FunctionalComponentsBasics /> */} 
     {/* <ClassComponentBasics /> */}
     {/* <FunctionComp /> */}
     <ClassComponentState />
    </>
  )
}

export default App
