import logo from './logo.svg'
import './App.css'
import {React,useState } from 'react'

const App =() => {
  const[message,setMsg]= useState('')

  const handleClick=async ()=>{
    const data = await window.fetch('/api/klieven') 
    const json = await data.json()
    setMsg(json.msg)
}
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}> TEST</button>
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
