import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import RowPost from './components/RowPost'
import {orginals,action,Horror,comedies,Romance,Trending} from './constants/constants'

function App() {


  return (
    <div className='h-screen bg-black overflow-y-scroll overflow-x-hidden no-scrollbar'>
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action"/>
      <RowPost url={Horror} title="Horror"/>
      <RowPost url={comedies} title="Comedies"/>
      <RowPost url={Romance} title="Romance"/>
      <RowPost url={Trending} title="Trending"/>
    </div>
  )
}

export default App
