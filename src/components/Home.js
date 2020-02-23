import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSort} from "../redux/actions/setActions";
import {Link} from "react-router-dom";


function Home() {

    const [items, setItems] = React.useState([]);
    const list = useSelector(state=>state.list);
    const sortMethod = useSelector(state=>state.sortMethod);
    const dispatch = useDispatch();

    React.useEffect(()=>{
           let sortedList = list;
           for(let i in sortMethod){
               if (sortMethod[i].toggleSort){
                   if (i !=="value") {
                       sortedList = sortedList.filter(it => {
                           return sortMethod[i].sortValue.includes(it[i])
                       });
                   }
                   else if (sortMethod[i].sortValue==25){
                       sortedList = sortedList.filter(it => {
                           return it[i]>24;
                       })
                   }
                   else if (sortMethod[i].sortValue==24){
                       sortedList = sortedList.filter(it => {
                           return it[i]<25;
                       })
                   }


               }
           }

           setItems(sortedList);
       },[sortMethod,list]);

    let returnedList = items.map((item,idx)=>
        <div key={idx} style={{backgroundColor:item.color}}>
            <h4><Link to={"/"+item.name}>{item.name}</Link></h4>
            <p>Type: {item.type}</p>
            <p>Color: {item.color}</p>
            <p>Value: ${item.value}</p>
        </div>
    );
    return (
        <div>
            <button onClick={()=>dispatch(changeSort("value",25))}>25 and up</button>
            <button onClick={()=>dispatch(changeSort("value",24))}>Less than 25</button>
            <button onClick={()=>dispatch(changeSort("type","polygon"))}>Polygon</button>
            <button onClick={()=>dispatch(changeSort("type","triangle"))}>triangle</button>
            <button onClick={()=>dispatch(changeSort("color","red"))}>Red</button>
            <button onClick={()=>dispatch(changeSort("color","orange"))}>Orange</button>
            <button onClick={()=>dispatch(changeSort("color","pink"))}>Pink</button>
            <button onClick={()=>dispatch(changeSort("color","blue"))}>Blue</button>
            <button onClick={()=>dispatch(changeSort("color","green"))}>Green</button>
            <button onClick={()=>dispatch(changeSort("color","purple"))}>Purple</button>

            {items.length===0?<p>No items found</p>:returnedList}
         </div>
    );
}

export default Home;