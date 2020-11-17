import React from 'react'
import NavigationList from './NavigationList'

const NavigationItems = (props) => {

    let displayitems=[];


    Object.keys(props.items).map((key, index)=> {

        displayitems[index]=<NavigationList key ={key} mega={props.items[key].extended} tos={props.items[key].to}>{props.items[key].title}</NavigationList>
      });

    
    return (
        <div>
            {displayitems}
        </div>
    )
}

export default NavigationItems
