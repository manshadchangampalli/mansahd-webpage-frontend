import React from 'react'
import HomePage from './Page/Home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Page/Project/Projects'
import Library from './Page/Library/Library'
import ViewAll from './Components/AllCodes/ViewAll'

function Page() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/library/viewall" element={<ViewAll/>}/>
                <Route path="/contact" element={<HomePage/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Page
