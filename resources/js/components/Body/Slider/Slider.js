
import React, { Component } from 'react'
import Axios from 'axios'
import HOC from '../../HOC/HOC'

 class Slider extends Component {

    constructor(props){
        super(props);
        this.state={
            sliderContent:{
                image:'123',
                content:'Check your connection',
                link:'/products'
            },
        }
    }

    componentDidMount(){
        Axios.get('/23423423423426569').then(response=>{
            this.setState({
                ...this.state,
                sliderContent:response.data
            })
        }).catch(error=>
            {console.log("Error in fetching the data----->"+error+" <-------");
    })        
    }
    render() {

        return (
            <HOC>
               <div className="slider-area">
    <div className="slider-active owl-carousel nav-style-1" style={{'display':'block'}}>
        <div className="single-slider single-slider-10 slider-height-8 bg-aqua">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 d-flex align-items-center">
                        <div className="slider-content slider-content-10 slider-animated-2">
                            <h3 className="animated">Smart Products</h3>
                            <h1 className="animated">Summer Offer <br/>2019 Collection</h1>
                            <div className="slider-btn btn-hover">
                                <a className="animated" href="shop.html">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                        <div className="slider-singleimg-hm10 slider-animated-2 ml-40 mr-40">
                            <img className="animated" src="assets/img/slider/single-slide-4.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div className="suppoer-area pt-100 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="support-wrap mb-30 support-1">
                        <div className="support-icon">
                            <img className="animated" src="assets/img/icon-img/support-1.png" alt=""/>
                        </div>
                        <div className="support-content">
                            <h5>Free Shipping</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="support-wrap mb-30 support-2">
                        <div className="support-icon">
                            <img className="animated" src="assets/img/icon-img/support-2.png" alt=""/>
                        </div>
                        <div className="support-content">
                            <h5>Support 24/7</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="support-wrap mb-30 support-3">
                        <div className="support-icon">
                            <img className="animated" src="assets/img/icon-img/support-3.png" alt=""/>
                        </div>
                        <div className="support-content">
                            <h5>Money Return</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="support-wrap mb-30 support-4">
                        <div className="support-icon">
                            <img className="animated" src="assets/img/icon-img/support-4.png" alt=""/>
                        </div>
                        <div className="support-content">
                            <h5>Order Discount</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </HOC>
        )
    }
}
export default Slider
