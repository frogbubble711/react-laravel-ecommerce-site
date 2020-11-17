import React from 'react'
import HOC from '../../HOC/HOC'

const ShipItem = (props) => {
    let review_star=[<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>,<i className="fa fa-star-o"></i>];
    let i=0
    for(i;i<props.review;i++){        
        review_star[i]=<i className="fa fa-star-o yellow"></i>
    }
    return (
        <HOC>
    <div class="col-lg-6 col-md-12 col-12">
                            <div class="shop-list-wrap mb-30 scroll-zoom">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div class="product-wrap">
                                            <div class="product-img">
                                                <a href="#">
                                                    <img class="default-img" src={props.image} alt=""/>
                                                </a>
                                                <span class="pink">-30%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div class="shop-list-content">
                                            <h3><a href="#">{props.name}</a></h3>
                                            
                                            <div class="rating-review">
                                                <div class="product-list-rating">
                                                    {review_star}
                                                </div>
                                                <a href="#">{props.review} Reviews</a>
                                            </div>
                                            <p>{props.desc}</p>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
        </HOC>
    )
}

export default ShipItem
