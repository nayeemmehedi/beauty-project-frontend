import React from 'react'
import TopBar from '../productChild/TopBar'
import MainProduct from '../productChild/MainProduct'

function Product() {
  return (
    <div className='mt-16'>
        <TopBar></TopBar>
        <MainProduct></MainProduct>
    </div>
  )
}

export default Product