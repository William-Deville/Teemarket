import React from "react";

export default function Cart() {
  return (
    <div className="checkout-container">
      <div id="order-recap">
        <h2>Displate</h2>
        <div className="article-template">
          <div id="img-container">
            <img src="" height="150" width="100" alt="test" />
          </div>
          <div className="article-template-infos">
            <label htmlFor="quantity" className="label" id="quantity-label">
              Quantity:
            </label>
            
            <select  className='select' name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9+">9+</option>
            </select>
          </div>
          <div>
            <label htmlFor="size" className="label" id="size-label">
              Size:
            </label>
            
              <select className='select'  name="size" id="size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            
          </div>
          <div>
            <label htmlFor="price" className="label">
              Price:
            </label>
            <span id="price" name="price" id="aritcle-price">
              39€
            </span>
          </div>
        </div>
      </div>
      <div id="order-detail">
        <h2>Order details </h2>
        <div >
          
          <div id="shipping" className="item-detail">
            <h4>Shipping to:</h4>
            
              <select name="country" id="country-list">
                <option value="BE">Belgium</option>
                <option value="FR">France</option>
                <option value="US">USA</option>
                <option value="DU">Dutchland</option>
                <option value="GE">Germany</option>
                <option value="WW">world wide</option>
              </select>
          </div>
          <div className="item-detail">
            <h4 className="recap-titem-title"> Items Total:</h4>
            <h4 className="recap-price">€30</h4>
          </div>
          <div className="item-detail">
            <h4 className="recap-titem-title"> shipping total:</h4>
            <h4 className="recap-price">€30</h4>
          </div>
          <div className="item-detail">
            <h4 className="recap-titem-title"> Total:</h4>
            <h4 className="recap-price">€60</h4>
          </div>
          <button className="item-detail" id="checkout"> Checkout</button>
        </div>
      </div>
    </div>
  );
}
