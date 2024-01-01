import React from 'react'

import {ProductList , ProductProvider} from "./../context/productContext";


const Products = () => {
  return (
    <div className='products'> 
        <div>
            <ProductProvider>
                <div>
                    <ProductList />
                </div>
            </ProductProvider>
        </div>
    </div>
  )
}

export default Products