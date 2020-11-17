
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HOC from '../HOC/HOC';
import Mobile from './Mobile/Mobile';
import NavigationItems from './NavigationItems/NavigationItems';

class Navbar extends Component {    
    
    render() {
        
    let cartcontent=<div className="shopping-cart-content">
        <ul>
            <li className="single-shopping-cart">
                <div className="shopping-cart-img">
                    <a href="#"><img alt="" src="assets/img/cart/cart-1.png"/></a>
                </div>
                <div className="shopping-cart-title">
                    <h4><a href="#">T- Shart and Jeans </a></h4>
                    <h6>Qty: 02</h6>
                    <span>$260.00</span>
                </div>
                <div className="shopping-cart-delete">
                    <a href="#"><i className="fa fa-times-circle"></i></a>
                </div>
            </li>
            <li className="single-shopping-cart">
                <div className="shopping-cart-img">
                    <a href="#"><img alt="" src="assets/img/cart/cart-2.png"/></a>
                </div>
                <div className="shopping-cart-title">
                    <h4><a href="#">T- Shart and Jeans </a></h4>
                    <h6>Qty: 02</h6>
                    <span>$260.00</span>
                </div>
                <div className="shopping-cart-delete">
                    <a href="#"><i className="fa fa-times-circle"></i></a>
                </div>
            </li>
        </ul>
        <div className="shopping-cart-total">
            <h4>Shipping : <span>$20.00</span></h4>
            <h4>Total : <span className="shop-total">$260.00</span></h4>
        </div>
        <div className="shopping-cart-btn btn-hover text-center">
            <Link  className ="default-btn" to="/cart">view cart</Link>
            <Link className= "default-btn" to="/cart">Checkout</Link>
        </div>
        </div>; 
        
        let navigations={
            '0':{
                title:'Home',
                extended:false,
                to:"/"
            },
            '1':{
                title:'Shop',
                extended:false,
                to:"/shop"
            },
            '2':{
                title:'Products',
                extended:true,
                to:"/products"
            },
            '3':{
                title:'Contact',
                extended:false,
                to:"/contact"
            },
            
        }
            

        return (
            <HOC>
                <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                    <div className="logo">
                        <a href="index.html">
                            <img alt="" src="assets/img/logo/logo.png"/>
                        </a>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu">
                        <nav>
                            <ul>
                                <NavigationItems items={navigations}/>                               
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                       <div className="header-right-wrap">
                        <div className="same-style header-search">
                            <a className="search-active" href="#"><i className="pe-7s-search"></i></a>
                            <div className="search-content">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button className="button-search"><i className="pe-7s-search"></i></button>
                                </form>
                            </div> 
                        </div>
                        <div className="same-style account-satting">
                            <a className="account-satting-active" href="#"><i className="pe-7s-user-female"></i></a>
                            <div className="account-dropdown">
                                <ul>
                                    
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/wishlist'>Wishlist</Link></li>
                                <li><Link to='/account'>My Account</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="same-style header-wishlist">
                        <Link to='/wishlist'><i className="pe-7s-like"></i></Link>
                        </div>
                        <div className="same-style cart-wrap">
                            <button className="icon-cart" >
                                <i className="pe-7s-shopbag"></i>
                                <span className="count-style">x</span>
                            </button>
                            {cartcontent}
                        </div>
                    </div>
                </div>
            </div>
                <Mobile items={navigations}/>
            </div>
    </header>
            </HOC>
        )
    }
}


export default Navbar
