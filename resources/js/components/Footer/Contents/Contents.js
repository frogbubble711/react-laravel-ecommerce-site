import React from 'react'
import { Link } from 'react-router-dom'

const Contents = (props) => {
    return (
        <footer className="footer-area bg-gray pt-100 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="copyright mb-30">
                    <div className="footer-logo">
                        <Link to="/">
                        <img alt="" src="assets/img/logo/logo.png"/>
                        </Link>
                        <a href="index.html">
                        </a>
                    </div>
                    <p>© 2020 <a href="#">Design By Yogesh</a>.<br/> All Rights Reserved</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-30">
                    <div className="footer-title">
                        <h3>ABOUT US</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/contact">Know Location</Link></li>
                            <li><a href="#">Orders tracking</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-50">
                    <div className="footer-title">
                        <h3>USEFUL LINKS</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Support Policy</a></li>
                            <li><a href="#">Size guide</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-75">
                    <div className="footer-title">
                        <h3>FOLLOW US</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-70">
                    <div className="footer-title">
                        <h3>SUBSCRIBE</h3>
                    </div>
                    <div className="subscribe-style">
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <div id="mc_embed_signup" className="subscribe-form">
                            <form id="mc-embedded-subscribe-form" className="validate" target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                <div id="mc_embed_signup_scroll" className="mc-form">
                                    <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL"/>
                                    <div className="mc-news" aria-hidden="true">
                                        <input type="text"  name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                    </div>
                                    <div className="clear">
                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="Subscribe"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Contents
