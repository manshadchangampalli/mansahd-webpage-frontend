import React from 'react'
import HomePage from './Page/Home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Page() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<HomePage/>}/>
                <Route path="/library" element={<HomePage/>}/>
                <Route path="/contact" element={<HomePage/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Page
