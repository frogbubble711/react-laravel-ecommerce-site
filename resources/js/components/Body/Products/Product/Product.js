import React from 'react'
import HOC from '../../../HOC/HOC'

const Product = (props) => {

    let review_star=[<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>];
    let i=0
    for(i;i<props.review;i++){        
        review_star[i]=<i className="fa fa-star-o yellow"></i>
    }

    return (
        <HOC>
            
            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="#">
                                                <img className="default-img" src={props.image} alt=""/>
                                                <img className="hover-img" src={props.image} alt=""/>
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i class="pe-7s-like"></i></a>
                                        </div>
                                        <div class="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                                        </div>
                                        <div class="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                        </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">{props.name}</a></h3>
                                            <div className="product-rating">
                                            
                                                {review_star}
                                            </div>
                                            <div className="product-price">
                                                <span>${props.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
        </HOC>
    )
}

export default Product
