import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kisikart from './kisikart.jsx';

function App() {
  return (
    <div>
      <h1>Kişiler</h1>
      <Kisikart ad="Ayhan Hocam" yas={40}/>
      <Kisikart ad="Muhammed" yas={18}/>
      <Kisikart ad="Şevket" yas={19}/>
    </div>
  )
}

export default App
