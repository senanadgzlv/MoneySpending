import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helpers'

const Basket = ({basket,total,product,resetBasket}) => {
  return (
    <div className='sebet' >
        <h3>Alışveriş Detayları</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={product.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Toplam: ${moneyFormat(total)}
				</div>
				<button className="basket-reset-btn btn btn-success " onClick={resetBasket}>Reset Basket</button>


    </div>
  )
}

export default Basket