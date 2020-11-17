import React, { Component } from 'react'
import HOC from '../../HOC/HOC'
import Product from './Product/Product'
import ProductDesc from './Product/ProductDesc'
import Axios from 'axios'
import Modal from '../../Modal/Modal'

export default class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products:{
                name:'Not Found',
                price:'XXX'
            },
        };
      }

    componentDidMount(){
        Axios.get('/23423423423426567').then(response=>{
            this.setState({
                ...this.state,
                products:response.data
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {

        const display_products=[]
        const display_desc_products=[]

        if(this.state.products!==undefined)
        {
            Object.keys(this.state.products).map((keys,index)=>{

                display_desc_products[index]=<ProductDesc image = {this.state.products[keys].product_image} name={this.state.products[keys].product_name} price={this.state.products[keys].product_price} review={this.state.products[keys].product_review} desc={this.state.products[keys].product_description}/>

                display_products[index]=<Product image={this.state.products[keys].product_image} name={this.state.products[keys].product_name} price={this.state.products[keys].product_price} review={this.state.products[keys].product_review}/>           
            })
        }
        
        return (
            <HOC>
                <div className="shop-area pt-95 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="shop-top-bar">
                        <div className="select-shoing-wrap">
                            <div className="shop-select">
                                <select>
                                    <option value="">Sort by newness</option>
                                    <option value="">A to Z</option>
                                    <option value=""> Z to A</option>
                                    <option value="">In stock</option>
                                </select>
                            </div>
                            <p>Showing 1–12 of 20 result</p>
                        </div>
                        <div className="shop-tab nav">
                            <a className="active" href="#shop-1" data-toggle="tab">
                                <i className="fa fa-table"></i>
                            </a>
                            <a href="#shop-2" data-toggle="tab">
                                <i className="fa fa-list-ul"></i>
                            </a>
                        </div>
                    </div>
                    <div className="shop-bottom-area mt-35">
                        <div className="tab-content jump">
                            <div id="shop-1" className="tab-pane active">
                                <div className="row">
                                    {display_products}
                                </div>
                            </div>
                            <div id="shop-2" className="tab-pane">
                                {display_desc_products}
                            </div>
                        </div>
                        <div className="pro-pagination-style text-center mt-30">
                            <ul>
                                <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sidebar-style ml-30">
                        <div className="sidebar-widget">
                            <h4 className="pro-sidebar-title">Search </h4>
                            <div className="pro-sidebar-search mb-50 mt-25">
                                <form className="pro-sidebar-search-form" action="#">
                                    <input type="text" placeholder="Search here..."/>
                                    <button>
                                        <i className="pe-7s-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h4 className="pro-sidebar-title">Refine By </h4>
                            <div className="sidebar-widget-list mt-30">
                                <ul>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox"/> <a href="#">On Sale <span>4</span> </a> 
                                            <span className="checkmark"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">New <span>4</span></a> 
                                            <span className="checkmark"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">In Stock <span>4</span> </a>
                                            <span className="checkmark"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget mt-45">
                            <h4 className="pro-sidebar-title">Filter By Price </h4>
                            <div className="price-filter mt-10">
                                <div className="price-slider-amount">
                                    <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                </div>
                                <div id="slider-range"></div>
                            </div>
                        </div>
                        <div className="sidebar-widget mt-50">
                            <h4 className="pro-sidebar-title">Colour </h4>
                            <div className="sidebar-widget-list mt-20">
                                <ul>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">Green <span>4</span> </a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">Cream <span>4</span> </a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">Blue <span>4</span> </a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">Black <span>4</span> </a>
                                            <span className="checkmark"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget mt-40">
                            <h4 className="pro-sidebar-title">Size </h4>
                            <div className="sidebar-widget-list mt-20">
                                <ul>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">XL</a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">L</a>
                                            <span className="checkmark"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">SM</a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-widget-list-left">
                                            <input type="checkbox" value=""/> <a href="#">XXL</a>
                                            <span className="checkmark"></span> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget mt-50">
                            <h4 className="pro-sidebar-title">Tag </h4>
                            <div className="sidebar-widget-tag mt-25">
                                <ul>
                                    <li><a href="#">Clothing</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Fashion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal image desc name review/>
            </HOC>
        )
    }
}

