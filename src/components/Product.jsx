import React from 'react'

const Product = ({product, pul, total, sepet, setSepet}) => {

const ortadakiReqem=sepet.find(item=>item.id=== product.id)

  const sepeteEkle=()=>{

    const CheckSepet=sepet.find(item =>item.id===product.id)
 
    if(CheckSepet){

CheckSepet.amount+=1
setSepet([...sepet.filter(item=>item.id !==product.id),CheckSepet]) 
    }else{
      setSepet([...sepet, {
        id:product.id,
        amount:1
      }])
    }
  }
  const sepetdenKaldir = () => {
		const currentBasket = sepet.find(item => item.id === product.id)
		const basketWithoutCurrent = sepet.filter(item => item.id !== product.id)
		currentBasket.amount -= 1
		if (currentBasket.amount === 0) {
			setSepet([...basketWithoutCurrent])
		} else {
			setSepet([...basketWithoutCurrent, currentBasket])
		}
	}
  return (


 
     <div className='col-12 col-md-4 mt-3 senan' >
      {/* <img  src={product.img} width="400" alt="" />
        <h6>{product.title}</h6>
        <div className="price">{product.price}</div>
        <button disabled={!ortadakiReqem} onClick={sepetdenKaldir} >Sat</button>
        <span className='amount' >{ortadakiReqem && ortadakiReqem.amount ||0}</span>
        <button disabled={total + product.price > pul} onClick={sepeteEkle} >Satin Al</button> */}
        

  <img src={product.img} width='350' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">
   {product.price}
    </p>
    <button disabled={!ortadakiReqem} onClick={sepetdenKaldir} href="#" className=" me-3 btn btn-primary">
    Sat
    </button>
    <span  className='amount me-3' >{ortadakiReqem && ortadakiReqem.amount ||0}</span>
    <button disabled={total + product.price > pul} onClick={sepeteEkle} className="me-3 btn btn-success" >Satin Al</button>
  </div>

    </div>


   
  )
}

export default Product