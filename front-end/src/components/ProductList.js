

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const ProductList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setProducts(result);
    // console.log(result);
  }

  // console.warn('products', products);

  const deleteProduct = async (id) => {
    console.warn(id)
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result = await result.json();
    if (result) {
      getProducts();
    }
  }

  const searchhandle = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      result = await result.json()
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts()
    }
  }


  return (
    <div className='product-list' >
      <h1> Product List  </h1>

      <input onChange={searchhandle} className='search' type='text' placeholder='search product' />

      <ul >
        <li>sr.no</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>


      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.company}</li>
          <li>{item.category}</li>
          <li><button onClick={() => deleteProduct(item._id)} > Delete</button>

            <Link to={"/update/" + item._id} className='update-link' >Update</Link>
          </li>
        </ul>
      ))}


    </div>
  )
}

export default ProductList
