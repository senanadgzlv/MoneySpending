import React from 'react'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import products from "./products.json"
import Product from './components/Product'
import Basket from './components/Basket'

const App = () => {

    const [money, setMoney]=useState(2000000);
    const [sepet, setSepet]=useState([]);
    const [total, setTotal]=useState(0);

    const resetBasket = () => {
      setSepet([])
    }
    useEffect(()=>{
setTotal(sepet.reduce((toplam,basketitems)=>{
  return toplam +(basketitems.amount *(products.find(Erzaq => Erzaq.id === basketitems.id).price))
},0))

    },[sepet])
  return (
    <div>
      <Header total={total} pul={money} />
    
     
   <div className="container">
    <div className="row">
    {products.map(Erzaq =>(
        <Product key={Erzaq.id}  total={total} pul={money} sepet={sepet} setSepet={setSepet} product={Erzaq} />
      ))}
    </div>
   </div>
    
    

      <Basket basket={sepet}  product={products}  total={total} resetBasket={resetBasket} />
      
    </div>
  )
}

export default App