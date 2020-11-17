import React from 'react'
import ReactDOM from 'react-dom'
import './root.css'
import Aux from './components/HOC/HOC'
import NavBar from './components/Navbar/Navbar.js'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'



function Root() {
    return (
        <Aux>
            <NavBar />
             <Body />
            <Footer />
        </Aux>   
    );
}

export default Root;
if (document.getElementById('root')) {
    ReactDOM.render(
    <BrowserRouter>
    <Root />
    </BrowserRouter>    
    , document.getElementById('root'));
}