import React, { Component } from 'react'
// import './Product.scss'
import '../Cards/Product.scss'


const product = {
    _id: '10',
    name: 'Name',
    price: 7.00,
    image: 'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg',
    type: 'Desayudo',
    dateEntry: '10/10/19',
}

class Product extends Component {
    render() {
        return <div className="container">
            <div className="image-container">
                <img src={product.image} alt=''/>
            </div>
            <h2>{product.name}</h2>
            <div className="Product-information">
                <div className="Product-address">
                    <div className="Product-address">
                        <p>Product ID: {product._id}</p>
                        <p>Type: {product.type}</p>
                        <p>Price: {product.price}</p>
                    </div>
                </div>
            </div>
            <button className="AddBtn" type="" value="Add" >Add</button>
        </div>
    }
}


export default Product;