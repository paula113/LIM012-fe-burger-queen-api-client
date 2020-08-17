import React from 'react';
import Product from '../../Components/Cards/Product';

import './Products.scss';

// export default class Products extends Component {
//   render() {
//     return (
//       <section className="typeofProduct">
//         <h1> Type of Product</h1>
//         <Product />
//         <Product />
//         <Product />
//       </section>

//     );
//   }
// }

const Products = () => (
  <section className="typeofProduct">
    <h2> Type of Product</h2>
    <Product />
    <Product />
    <Product />
  </section>

);
export default Products;
