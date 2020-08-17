import React from 'react';
import Products from './Products/Products';
import Order from '../../Components/Cards/Order';
import './Orders.scss';
import OrderReady from '../../Components/Cards/OrderReady';

// eslint-disable-next-line no-unused-vars
const Orders = (props) => (
  <main className="main-section">
    <section>
      <h1>Products</h1>
      <Products />
      <Products />
      <Products />
    </section>

    <section className="Order-taking">
      <h2>Take an Order</h2>
      <div className="order-information">
        <p>Waitress ID: 1111111</p>
        <input type="text" name="client" placeholder="Client name" />
      </div>
      <div className="row-name-columns">
        <span> </span>
        <span>Name</span>
        <span> Qty</span>
        <span> Price</span>
        <span> </span>
      </div>
      <Order />
      <Order />
      <Order />
      <Order />
      <div className="Line" />
      <p className="Total">Total: $ 30.00</p>
      <div className="Buttons">
        <button type="button" className="CancelBtn">Cancel</button>
        <button type="button" className="SendBtn">Send</button>
      </div>
      <OrderReady />
    </section>
  </main>
);

export default Orders;
