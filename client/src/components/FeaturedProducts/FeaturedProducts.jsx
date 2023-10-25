import React from 'react'
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeatureProducts = ({type}) => {
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
    <div className='featuredproducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>
        <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeatureProducts