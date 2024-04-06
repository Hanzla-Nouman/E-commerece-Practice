import React from 'react'

const Product = ({product}) => {
  return (
    <div className="card card-compact w-96  bg-base-200 shadow-xl "style={{"margin":"30px"}} >
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="card-title">hi</h1>
      <span className='text-slate-400  '>78</span>
    
    <div className="card-actions justify-end">
      <button className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default Product