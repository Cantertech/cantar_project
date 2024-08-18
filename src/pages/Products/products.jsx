import React from 'react'
import './products.css'

const products = () => {

  return (
    <div className='products'>
        <div className="nav">
            <div className="items">
                <div className='logo-element'>
                    <img src="/logo-main.svg" className='logo' alt="soon" />
                    <p className='canta'>CantarTech</p>
                </div>
                <div className='srch-element'>
                    <input type="search" placeholder='search' />
                    <img src="src\assets\search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" className='srch-btn' alt="" />
                </div>
                <ul>
                    <li><a href=""><img src="src\assets\home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a></li>
                    <li><a href=""><img src="src\assets\shopping_bag_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a></li>
                    <li><a href=""><img src="src\assets\shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a></li>
                    <li><a href=""><img src="src\assets\account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className="product-display">
            <div className="banner">
                
            </div>
            <div className="first-line"></div>
        </div>
    </div>
  )
}

export default products
