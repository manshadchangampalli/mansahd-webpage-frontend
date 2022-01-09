import React from 'react'
import './Home.scss'
import Layout from '../../Components/Layout'
import Homebg from '../../Components/HomeBG/Homebg'

function HomePage() {
    return (
        <div className='Home'>
            <Layout>
                <div className="Home-bg-container">
                <Homebg letter="H" classname="one"/>
                <Homebg letter="E" classname="two"/>
                <Homebg letter="L" classname="three"/>
                <Homebg letter="L" classname="four"/>
                <Homebg letter="O" classname="five"/>
                </div>
            </Layout>  
        </div>
    )
}

export default HomePage
