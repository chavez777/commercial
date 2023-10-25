import React from "react";
import "./List.scss";
import Card from "../Card/Card";


const List = () => {
    const data=[
        {
          id:1,
          img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title:"longe",
          isNew:true,
          oldPrice:19,
          price:12
        },
        {
          id:2,
          img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title:"longe",
          isNew:true,
          oldPrice:19,
          price:12
        },
        
      ]
  return (
    <div className="list">{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List