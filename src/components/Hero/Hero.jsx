import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios';

export default function Hero() {
  const [filterData, setFilterData] = useState([])
  const [ data , setData] = useState(filterData);
  const [isLoading, setIsLoading] = useState(false);


  const fetchApi = async()=>{
    setIsLoading(true)
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(res.data)
      setFilterData(res.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("error")

    }

  }
  useEffect(()=>{
    fetchApi()
  },[setFilterData])

  if (isLoading) {
    return (
      <button
        type="button"
        className="bg-cyan-700 flex items-center gap-4 text-white py-3 px-5 rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </button>
    );
  }

  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {filterData.map(item=>(
            <div className="relative overflow-hidden h-[400px] rounded-md" key={item.id}>
            <img
              src={item.url}
              alt={item.title}
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{item.id}</h1>
              <p className="mt-2 text-sm text-gray-300">
                {item.title}
              </p>
             
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
