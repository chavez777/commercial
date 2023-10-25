import React from 'react'
import "./Products.scss"
import List from "../../components/List/List";
const Products = () => {
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
          <input type="range"  min={0} max={1000}/>
          <span>1000</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc"  name="price"/>
            <label htmlFor="asc">Prcie (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc"  name="price"/>
            <label htmlFor="asc">Prcie (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' 
        //src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""/>
        <List/>

      </div>
    </div>
  )
}

export default Products