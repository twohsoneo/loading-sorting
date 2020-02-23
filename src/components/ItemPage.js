import React from "react";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";


function ItemPage(props){
    const list = useSelector(state=>state.list);


   const item = list.find(item=> item.name === props.match.params.id);


    return(
    <div style={{backgroundColor:item.color}}>
        <h1>{item.name}</h1>
        <p>Type: {item.type}</p>
        <p>Color: {item.color}</p>
        <p>Value: ${item.value}</p>
        <Link to={"/"}>Home</Link>
    </div>
    )

}

export default ItemPage