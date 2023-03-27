import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css'
import Content from './Content';
import Login from './Login';

function App() {
    const [count, setCount] = useState(0)


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/content" element={<Content/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
