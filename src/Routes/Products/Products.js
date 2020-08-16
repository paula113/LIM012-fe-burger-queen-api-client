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
        const info = [ 'id','name', 'price', 'type', 'image']
        return (
            <div id="users">
                <h1>Products</h1>
                 <form>
                     {info.map((info, index)=>  <input placeholder={info} key={index}></input>)}
                     <label htmlFor="cover-img-selected"></label>
                     <input type="file" id="cover-img-selected" name="cover-picture" accept="image/png, image/jpeg"/>
                     <button type="submit" >Add product</button>
                 </form>
                <Table info={info}/>
            </div>
        )
    }
}
