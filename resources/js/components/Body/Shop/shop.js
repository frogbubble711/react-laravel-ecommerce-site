import React,{Component} from 'react'
import ShipItem from './ShipItem'
import Axios from 'axios'


class Shop extends Component {


    constructor(props) {
        super(props);
        this.state = {
            shop:{
                name:'Not Found',
                price:'XXX'
            },
        };
      }

    componentDidMount(){
        Axios.get('/23423423423426568').then(response=>{
            this.setState({
                ...this.state,
                shop:response.data
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {

        const display_shops=[]

        if(this.state.shop!==undefined)
        {
            Object.keys(this.state.shop).map((keys,index)=>{

                display_shops[index]=<ShipItem name={this.state.shop[keys].shop_name} image={this.state.shop[keys].shop_image} review={this.state.shop[keys].shop_rating} desc={this.state.shop[keys].shop_description} />
            })
        }
        

        return (
            <div>
                <div class="shop-area pt-95 pb-100 section-padding-1 list2-col-style">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shop-top-bar mb-35">
                        <div class="select-shoing-wrap">
                            <div class="shop-select">
                                <select>
                                    <option value="">Sort by newness</option>
                                    <option value="">A to Z</option>
                                    <option value=""> Z to A</option>
                                    <option value="">In stock</option>
                                </select>
                            </div>
                            <p>Showing 1–12 of 20 result</p>
                        </div>
                        <div class="filter-active" >
                            <a><i class="fa fa-plus"></i> filter</a>
                        </div>
                    </div>
                    <div class="product-filter-wrapper">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-xs-12 mb-30">
                                <div class="product-filter">
                                    <h5>Sort by</h5>
                                    <ul class="sort-by">
                                        <li><a href="#">Default</a></li>
                                        <li><a href="#">Popularity</a></li>
                                        <li><a href="#">Average rating</a></li>
                                        <li><a href="#">Newness</a></li>
                                        <li><a href="#">Price: Low to High</a></li>
                                        <li><a href="#">Price: High to Low</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12 mb-30">
                                <div class="product-filter">
                                    <h5>color filters</h5>
                                    <ul class="color-filter">
                                        <li><input type="checkbox" value=""/> <a href="#">Black</a></li>
                                        <li><input type="checkbox" value=""/> <a href="#">Brown</a></li>
                                        <li><input type="checkbox" value=""/> <a href="#">Orange</a></li>
                                        <li><input type="checkbox" value=""/> <a href="#">red</a></li>
                                        <li><input type="checkbox" value=""/> <a href="#">Yellow</a></li>
                                        <li><input type="checkbox" value=""/> <a href="#">purple</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12 mb-30">
                                <div class="product-filter">
                                    <h5>product tags</h5>
                                    <div class="product-tags">
                                        <ul>
                                            <li><a href="#">New</a></li>
                                            <li><a href="#">brand</a></li>
                                            <li><a href="#">black</a></li>
                                            <li><a href="#">white</a></li>
                                            <li><a href="#">chire</a></li>
                                            <li><a href="#">table</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12 mb-30">
                                <div class="product-filter">
                                    <h5>Filter by price</h5>
                                    <div class="price-filter mt-25">
                                        <div class="price-slider-amount">
                                            <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                        </div>
                                        <div id="slider-range"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-bottom-area">
                        <div class="row">
                            {display_shops}
                        
                         </div>
                        <div class="pro-pagination-style text-center mt-30">
                            <ul>
                                <li><a class="prev" href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a class="next" href="#"><i class="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default Shop
