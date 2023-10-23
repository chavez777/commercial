import React from 'react'
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeatureProducts = ({type}) => {
  return (
    <div className='featureproducts'>
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
                <Card itemm={item} key={itemm.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeatureProducts