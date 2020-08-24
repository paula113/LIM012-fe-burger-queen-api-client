
import React, { useState, useEffect } from 'react';
import './Products.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import SearchBar from '../../Components/searchBar';
import { 
  getAllData,
  getData,
  getByKeyword,
  postbyKeyword,
  deletebyKeyword,
  updateByKeyword,
 } from '../../controller/crud';

const Products = () => {

  const headTable= ['_id', 'name', 'price', 'image', 'type', 'dateEntry'];
  const initPage = { current: 1 , total: 1};
  //-------------------------STATE------------------------------//
  const [products, setProducts] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(initPage);
//-------------------------GET USER------------------------------//
    useEffect(() => {
      (async ()=> {
        try{
          console.log('use efect');
          const dataJson = await getData(page.current,'products');
           setProducts(dataJson);
          ////-------
          
          const allProducts = await getAllData('products');
          setAllData(allProducts);
          setPage(page => ({ ...page, total: Math.ceil((allProducts.length)/5) }));
          ////-------
        }catch(e){
          console.log(`Error: ${e}`);
        }
      })()
    },[products]);
// PAGINATION
  const currentPage = (thisPage) => {
    setPage(page => ({...page, current: thisPage}));
  }
//-------------------------UPDATE USER------------------------------//

    function putData(data){
      document.getElementById('name').value = data.name;
      document.getElementById('price').value = data.price;
      document.getElementById('type').value = data.type;
      document.getElementById('submitProduct').textContent = 'Save changes';
      setDataToPut(data);
    }

    async function productsSubmit(event) {
      event.preventDefault();
      const button = document.getElementById('submitProduct');
      const newName = document.getElementById('name').value;
      const newPrice = document.getElementById('price').value;
      const newType = document.getElementById('type').value;
      // console.log(document.getElementById('image').value);
      const image = document.getElementById('image')
      image.addEventListener('change', previewImg)
      const body = {
        name : newName,
        price : newPrice,
        type : newType,
      }
      console.log(body);
      if(button.textContent === 'Save changes'){
        //-------------------------UPDATE USER------------------------------//
        const resp = await updateByKeyword(dataToPut._id, body,'products');
        console.log(resp);
      } else {  
        //-------------------------POST NEW USER------------------------------//
        await postbyKeyword(body,'products');
        window.alert('añadido con exito');
      }
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => await deletebyKeyword(data._id,'products');

const searchUserBy = async (e) =>{
  e.preventDefault();
  const input = document.querySelector('div.search-box input[placeholder="Search employee"]').value;
  const validateInput = allData.find((user) => input === user._id );
  if (validateInput) { 
  const data = await getByKeyword(validateInput._id, 'products');
  const array = [data];
  setProducts(array);
  }
  };

        return (
          <div className="products">
              <div className="containertop">
              <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

            <form onSubmit={(e) => productsSubmit(e)}>
              <input placeholder="Name" id="name" name="name"  />
              <input placeholder="Price" id="price" name="price" />
              <input placeholder="Type" id="type" name="type"  />
              <div class="choose_file">
                  <span>Choose image</span>
                  <input id="image" name="Select File" type="file" />
              </div>
              <label for="sdate">Selec date entry:</label>
              <input type="datetime-local" id="date" name="date"
                    min="2000-01-01" max="2021-12-"></input>
               <button type="submit" id="submitProduct">Add user</button>
            </form>
            </div>
            <SearchBar arrayData={allData} searchUserBy={searchUserBy}/>
            <Table head={headTable} arrayData={products} putData={putData} deleteBy={deleteBy} page={page}/>
            <Pagination page={page }currentPage= {currentPage}/>
          </div>
        );
};

export default Products;
