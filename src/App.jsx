import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';

function App() {
  
  function clickMe(){
    alert("Hello");
  }

  const clickMe2=()=>{
    alert("Hello");}

  return (
    <>
      <h1>Vite + React</h1>

      {/* <button onclick="clickMe()" type="button">Hello</button> */}

      <button onClick={clickMe} type="button">Hello-1</button>
      <button onClick={clickMe2} type="button">Hello-2</button>
      <button onClick={()=>{alert("Hello? I am a button")}} type="button">Hello-3</button>

      <Counter></Counter>
    </>
  )
}

export default App
