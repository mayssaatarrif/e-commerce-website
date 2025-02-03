import React from 'react'
import MainRoute from './routes/MainRoute'
import Navbar from './components/organism/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <MainRoute/>
    </div>
  )
}

export default App