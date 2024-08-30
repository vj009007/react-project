import React from 'react'
import { productList } from '../utils/productList'

const Cart = () => {

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {productList.map((item,index)=>{
           return( <div className="rounded-md border bg-white" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full rounded-md object-contain"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold title">{item.title}</h1>
                <p className="mt-3 text-sm text-gray-600 description">
                {item.description}
                </p>
                <p className='mt-2'>
                  ${item.price}
                </p>
                <button
                  type="button" id={item.id}
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Buy Now
                </button>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
