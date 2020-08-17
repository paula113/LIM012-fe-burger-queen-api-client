import React from 'react';
import './Product.scss';

const product = {
  id: '10',
  name: 'Name',
  price: 7.00,
  image: 'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg',
  type: 'Desayudo',
  dateEntry: '10/10/19',
};

// class Product extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="image-container">
//           <img src={product.image} alt="" />
//         </div>
//         <h2>{product.name}</h2>
//         <div className="Product-information">
//           <div className="Product-address">
//             <div className="Product-address">
//               <p>
//                 Product ID:
//                 {product._id}
//               </p>
//               <p>
//                 Type:
//                 {product.type}
//               </p>
//               <p>
//                 Price:
//                 {product.price}
//               </p>
//             </div>
//           </div>
//         </div>
//         <button className="AddBtn" type="" value="Add">Add</button>
//       </div>
//     );
//   }
// }
const Product = () => (
  <div className="container">
    <div className="image-container">
      <img src={product.image} alt="" />
    </div>
    <div className="Product-information">

      <div>
        <p>
          {product.name}
        </p>
        <p>
          Product ID:
          {product.id}
        </p>
        {/* <p>
          Type:
          {product.type}
        </p> */}
        <p>
          Price:
          {product.price}
        </p>
      </div>
    </div>
    <button className="AddBtn" type="button" value="Add">Add</button>
  </div>
);

export default Product;
