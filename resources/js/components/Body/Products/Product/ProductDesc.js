import React from 'react'
import HOC from '../../../HOC/HOC'

const ProductDesc = (props) => {
    return (
        <HOC>
            
            <div className="shop-list-wrap mb-30 scroll-zoom">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div className="product-wrap">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img className="default-img" src="assets/img/product/pro-1.jpg" alt=""/>
                                                    <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt=""/>
                                                </a>
                                                <span className="pink">-10%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div className="shop-list-content">
                                            <h3><a href="#">{props.name}</a></h3>
                                            <div className="product-list-price">
                                                <span>${props.price}</span>
                                            </div>
                                            <div className="rating-review">
                                                <div className="product-list-rating">
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">{props.review} Reviews</a>
                                            </div>
                                            <p>{props.desc}</p>
                                            <div className="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
        </HOC>
    )
}

export default ProductDesc
