
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
  //-------------------------STATE------------------------------//
  const [products, setProducts] = useState([]);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState({ current: 1 , total: 1});
  const [dataToPut, setDataToPut] = useState({});
  const [showDate, setShowDate] = useState(false);
  const [display, setDisplay] = useState({});
  const [query, setQuery] = useState(false);

  const table = {head:['image','_id', 'name', 'price','image text','type', 'dateEntry'], type: 'products'};
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
          if(e.message==='No page found'){
            const prevPage = page.current-1;
            const dataJson = await getData(prevPage,'products');
            setProducts(dataJson);
            setPage({ current: prevPage , total: page.total-1});
          }
        } finally{
          return () => setQuery(query);
        }
      })()

    },[query]);
// PAGINATION
  const currentPage = (thisPage) => {
    setQuery(!query)
    setPage(page => ({...page, current: thisPage}));
  }
//-------------------------UPDATE USER------------------------------//

    function putData(data){
      document.getElementById('name').value = data.name;
      document.getElementById('price').value = data.price;
      document.getElementById('type').value = data.type;
      document.getElementById('submitProduct').textContent = 'Save changes';
      setShowDate(true);
      setDataToPut(data);
    }

    async function productsSubmit(event) {
      event.preventDefault();
      const button = document.getElementById('submitProduct');
      let newName = document.getElementById('name').value;
      let newPrice = document.getElementById('price').value;
      let newType = document.getElementById('type').value;
      let image = document.getElementById('image').value
      // console.log(document.getElementById('image').value);
      //const neWmage = document.getElementById('image').files[0];
      //simage.addEventListener('change', previewImg)
      const body = {
        name : newName,
        price : newPrice,
        type : newType,
        image: image,
      }
      console.log(body);
      if(button.textContent === 'Save changes'){
        //-------------------------UPDATE USER------------------------------//
        await updateByKeyword(dataToPut._id, body,'products');
        setQuery(!query)
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('type').value= '';
        document.getElementById('image').value= '';
        document.getElementById('submitProduct').textContent = 'Add Product';
      } else {  
        //-------------------------POST NEW USER------------------------------//
        const productAdded = await postbyKeyword(body,'products');
        setDisplay(productAdded);
        setQuery(!query)
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('type').value= '';
        document.getElementById('image').value= '';
        const msg = document.getElementsByTagName('strong');
        setTimeout(() => { 
          msg.textContent = ''
          setDisplay({})
        }, 4000);
      }
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => {
    await deletebyKeyword(data._id,'products')
    setQuery(!query);

  };

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

            {(display.name) ? <strong>{display.name} successfully added</strong> : null}
              <input placeholder="Name" id="name" name="name"  />
              <input placeholder="Price" id="price" name="price" />
              <input placeholder="Insert url's image" id="image" name="image"/>
              <select name="type" id="type">
                <option value='desayuno'>Desayunos</option>
                <option value='hamburguesa'>Hamburguesas</option>
                <option value='acompañamiento'>Acompañamientos</option>
                <option value='para tomar'>Para tomar</option>
              </select>
              {/* <div class="choose_file">
                  <span>Choose image</span>
                  <input id="image" name="Select File" type="file" />
              </div> */}
              {showDate ? (<div>
                <label for="sdate">Selec date entry:</label>
              <input type="datetime-local" id="date" name="date"
                    min="2000-01-01" max="2021-12-"></input>
              </div>) : null}
               <button type="submit" id="submitProduct">Add Product</button> 
            </form>
            </div>
            <SearchBar arrayData={allData} searchUserBy={searchUserBy} table='products'/>
            <Table table={table} arrayData={products} putData={putData} deleteBy={deleteBy} page={page}/>
            <Pagination page={page }currentPage= {currentPage}/>
          </div>
        );
};

export default Products;
