import React, { useState } from "react";

export default function Cart() {
  const [itemNumber, setItemNumber] = useState(1);
  const [itemSize, setItemSize] = useState("M");
  const [Country, setCountry] = useState("BE");

  console.log(itemSize);
  console.log(itemNumber);
  console.log(Country);
  let price = 29;
  let shippingPrice = 5;

  switch (itemSize) {
    case "M":
      price = 29;
      break;
    case "L":
      price = 39;
      break;
    case "XL":
      price = 49;
      break;
  }
  switch (Country) {
    case "BE":
      shippingPrice = 5;
      break;
    case "FR":
      shippingPrice = 6;
      break;
    case "GE":
      shippingPrice = 7;
      break;
    case "US":
      shippingPrice = 15;
      break;
    case "DU":
      shippingPrice = 8;
      break;
    case "WW":
      shippingPrice = 20;
      break;
  }
  let itemPrice = price * itemNumber;
  let totalItemPrice = itemPrice;
  let totalPrice = shippingPrice + totalItemPrice;

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

            <select
              className="select"
              name="quantity"
              id="quantity"
              onChange={(e) => {
                const selectedNumber = e.target.value;
                setItemNumber(selectedNumber);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div>
            <label htmlFor="size" className="label" id="size-label">
              Size:
            </label>

            <select
              className="select"
              name="size"
              id="size"
              onChange={(e) => {
                const selectedSize = e.target.value;
                setItemSize(selectedSize);
              }}
            >
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="label">
              Price:
            </label>
            <span id="price" name="price" id="aritcle-price">
              {itemPrice}€
            </span>
          </div>
        </div>
      </div>
      <div id="order-detail">
        <h2>Order details </h2>
        <div>
          <div id="shipping" className="item-detail">
            <h4>Shipping to:</h4>

            <select
              name="country"
              id="country-list"
              onChange={(e) => {
                const selectedCountry = e.target.value;
                setCountry(selectedCountry);
              }}
            >
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
            <h4 className="recap-price"> {totalItemPrice}€</h4>
          </div>
          <div className="item-detail">
            <h4 className="recap-titem-title"> shipping price:</h4>
            <h4 className="recap-price">{shippingPrice}€</h4>
          </div>
          <div className="item-detail">
            <h4 className="recap-titem-title"> Total:</h4>
            <h4 className="recap-price">{totalPrice}€</h4>
          </div>
          <button className="item-detail" id="checkout">
            {" "}
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
