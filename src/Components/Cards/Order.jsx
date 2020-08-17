import React from 'react';
import '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import './Order.scss';

const Order = () => (
  <div className="row">
    {/* <Grid item xs={8} className="icon"> */}
    <DeleteIcon className="icon" />
    {/* <DeleteForeverIcon /> */}
    {/* </Grid> */}

    {/* <button>
      <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-social-network/gh-pages/src/img/icons/trash.svg" />
    </button> */}
    <p>
      Name Product Name Product Name Product
    </p>
    <input type="number" id="quantity" name="quantity" min="1" max="10" />
    <p>$ 14.00</p>
  </div>
);

export default Order;
