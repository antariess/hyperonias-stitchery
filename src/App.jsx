//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './Components/Header'
import Suggestions from './Components/Suggestions'
import HyperoniaView from './Components/HyperoniaView'
import './App.css'

function App() {
  return (
    <>
        <Header />
        <main>
        <BrowserRouter>
            <Routes>
                <Route path="/hyper-friend" element={<HyperoniaView/>}></Route>
                <Route path="/" element={<Suggestions/>}></Route>
            </Routes>  
        </BrowserRouter>
        </main>
    </>
  )
}

export default App


    //< div >
    //    <a href="https://vite.dev" target="_blank">
    //      <img src={viteLogo} className="logo" alt="Vite logo" />
    //    </a>
    //    <a href="https://react.dev" target="_blank">
    //      <img src={reactLogo} className="logo react" alt="React logo" />
    //    </a>
    //  </div >
    //  <h1>Vite + React</h1>
    //  <div className="card">
    //    <button onClick={() => setCount((count) => count + 3)}>
    //      count is {count}
    //    </button>
    //    <p>
    //      Edit <code>src/App.jsx</code> and save to test HMR
    //    </p>
    //  </div>
    //  <p className="read-the-docs">
    //    Click on the Vite and React logos to learn more
    //  </p>