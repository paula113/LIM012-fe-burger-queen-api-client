import React, { Component } from 'react'
import Table from '../../Components/Table'
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AreProducts : true,

        };
      }

    render() {
        const info = [ '_id','name', 'price', 'image', 'type', 'dateEntry'];
        const products = [{
            "_id": 1,
            "name":"aros con cebolla",
            "price":10,
            "image": "image.jpg",
            "type":"acompañamiento",
            "dateEntry":"12-08-2020",
          },
          {
            "_id": 2,
            "name":"hamburguesa",
            "price":15,
            "image": "image-hamburguesa.jpg",
            "type":"acompañamiento",
            "dateEntry":"12-09-2020",
          },
          {
            "_id": 3,
            "name":"agua",
            "price":5,
            "image": "image-2.jpg",
            "type":"acompañamiento",
            "dateEntry":"12-08-2020",
          },
          ]
        return (
            <div id="users">
                <h1>Products</h1>
                 <form>
                     {info.map((info, index)=>  {
                         if(info === 'image'){
                             return (<div>
                                 <input type="file" accept="image/png, image/jpeg"/>
                             </div>)
                         } else{
                             return <input placeholder={info} key={index}></input>
                         }
                     })}
                     <button type="submit" >Add product</button>
                 </form>
                <Table info={info} columns={products}/>
            </div>
        )
    }
}
