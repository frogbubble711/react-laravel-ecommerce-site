import React from 'react'
import { Route, Router, Switch } from 'react-router'
import HOC from '../HOC/HOC'
import Slider from './Slider/Slider'
import Shop from './Shop/shop.js'
import Products from './Products/Products'
import Contact from './Contact/Contact'
import Login from './Login/Login'
import Cart from './Cart/Cart'
import Wishlist from './Wishlist/Wishlist'
import Modal from '../Modal/Modal'

const Body = () => {
    return (
        <HOC>
            <Switch>
                <Route component={Slider} path='/' exact/>
                <Route component={Shop} path='/shop'/>
                <Route component={Products} path='/products'/>
                <Route component ={Contact} path='/contact'/>
                <Route component ={Login} path='/login'/>
                <Route component={Cart} path='/cart'/>
                <Route component={Wishlist} path='/wishlist'/>
            </Switch>

        </HOC>
    )
}

export default Body
