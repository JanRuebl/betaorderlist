import React from "react";
import "./UserCard.css";

export default function UserCard(user) {
  const { lastName, firstName, orders } = user.cardData;

  return (
    <div className='card_wrapper'>
      <div className='card_user'>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
      <div className='card_orders'>
        <ul>
          {orders.map((order) => (
            <li className='card_order_item' key={order.numOfOrder}>
              <p>Bestellung: {order.numOfOrder}</p>
              <ul>
                {order.orderedProducts.map((product) => (
                  <li className='card_order_item_inner'>
                    <p> Produkt: {product.productName}</p>
                    <p>Preis: {product.price}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
