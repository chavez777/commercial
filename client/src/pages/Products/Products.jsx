import React, { useState } from 'react'
import "./Products.scss"
import List from "../../components/List/List";
import { useParams } from 'react-router-dom';
const Products = () => {
  const catid=parseInt(useParams().id)
  const [maxPrice,setmaxPrice]=useState(1000)
  const [sort,setSort]=useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox"  id="1" value={1}/>
              <label htmlFor="1">shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox"  id="2" value={2}/>
              <label htmlFor="2">Skrit</label>
            </div>
            <div className="inputItem">
              <input type="checkbox"  id="3" value={3}/>
              <label htmlFor="3">Coat</label>
            </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem"></div>
          <span>0</span>
          <input type="range"  min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc"  name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Prcie (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc"  name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Prcie (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' 
        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""/>
        <List catid={catid} maxPrice={maxPrice} sort={sort}/>

      </div>
    </div>
  )
}

export default Products