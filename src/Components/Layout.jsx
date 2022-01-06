import React from 'react'
import NavBar from './Navbar'

function Layout({children}) {
    return (
        <>
            <NavBar/>
                {children}
            
        </>
    )
}

export default Layout
