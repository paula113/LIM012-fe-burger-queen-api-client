import React from 'react';
import './OrderReady.scss';

const OrderReady = () => (
  <div className="card-order-ready">
    <div className="row-title">
      <span className="row-qty">Qty</span>
      <span>Products</span>
      <span>Client Name: ......</span>
      <span>Order ID</span>
    </div>
    <div className="row-body">
      <span className="row-qty">3</span>
      <span>coffe coffe coffecofee coffe coffe coffecofee coffe coffe coffecofee</span>
      <span />
      <span />
    </div>
    <div className="card-footer">
      <span>Time: 5min</span>
      <button type="button" className="">Ready</button>
    </div>
  </div>
);

export default OrderReady;
