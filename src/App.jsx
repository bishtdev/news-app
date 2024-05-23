import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewBoard from './components/NewBoard'

const App = () => {
  const[category, setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewBoard category={category}/>
    </>
  )
}

export default App