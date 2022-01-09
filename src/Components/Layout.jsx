import React from 'react'
import NavBar from './Navbar'
import Logo from './logo'

function Layout({children}) {
    return (
        <>
            <NavBar/>
            <Logo/>
                {children}
            
        </>
    )
}

export default Layout
