import { useState } from 'react'

import './App.css'
import { FunctionaName } from './components/FunctionalCompOne.jsx'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'

function App() {
  return (
    //Fragment in react : <> </>
    <>
      {/* <FunctionaName />{/*Component name */}
      {/* <FunctionalComponentsBasics /> */} 
     {/* <ClassComponentBasics /> */}
     <FunctionComp />
    </>
  )
}

export default App
