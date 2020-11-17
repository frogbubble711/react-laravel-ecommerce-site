import React from 'react'
import { Link } from 'react-router-dom';
import HOC from '../../HOC/HOC'

const NavigationList = (props) => {
    let display    
        if(props.mega){
            display= <li><a>{props.children}<i className="fa fa-angle-down"></i></a>
           <ul className="submenu">               
               <li><Link to={props.tos}>{props.tos}</Link></li>
           </ul>
            </li>
         }
         else{
             display=<li><Link to={props.tos}>{props.children}</Link></li>
         }

    

    return (
        <HOC>
            {display}
        </HOC>
        
    )
}

export default NavigationList
