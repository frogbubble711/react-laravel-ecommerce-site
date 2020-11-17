import React from 'react'
import NavigationList from '../NavigationItems/NavigationList'

const Mobile = (props) => {

    let displayitems=[];

    Object.keys(props.items).map((key, index)=> {

        displayitems[index]=<NavigationList tos={props.items[key].to} key ={key} mega={props.items[key].extended}>{props.items[key].title}</NavigationList>
      });




    return (
        <div className="mobile-menu-area">
        <div className="mobile-menu">
            <nav id="mobile-menu-active">
                <ul className="menu-overflow">                    
                    {displayitems}
                </ul>
            </nav>
        </div>
    </div>

    )
}

export default Mobile
