import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const[selectedImg,setSelecterImg]=useState(0)
  const[quantity,setQuantity]=useState(1)

  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",

  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelecterImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelecterImg(1)}/>
        </div>
        <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span className='price'>$199</span>
        <p>this is the descripotion of a item</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev===1?1:prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product