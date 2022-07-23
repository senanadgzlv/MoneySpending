import React from 'react'
import { moneyFormat } from '../helpers'

const Header = ({total, pul}) => {
  return (
    <>

{total > 0 && pul - total !== 0 && (
				<div className="header"><h1>Xərcləyəcək <span>$ {moneyFormat(pul - total)}</span> pulunuz qaldı!</h1></div>
			)}
			{total === 0 && (
				<div className="header"><h1>Xərcləmək üçün  <span>$ {moneyFormat(pul)}</span> pulunuz var!</h1></div>
			)}
			{pul - total === 0 && (
				<div className="header empty"><h1>Bütün sərvəti bitirdin təbriklər!</h1></div>
			)}

 
        </>
  )
}

export default Header