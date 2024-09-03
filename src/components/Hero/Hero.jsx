import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios';

export default function Hero() {
  const [filterData, setFilterData] = useState([])
  const [ data , setData] = useState(filterData);


  const fetchApi = ()=>{
    // try {
    //   const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //   setData(res.data)
    //   setFilterData(res.data)
    // } catch (error) {
    //   console.log("error")
    // }
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>{
      setFilterData(data)
      setData(data)
    }
    )
    .catch(error=>console.log("error" , error))
  }
  useEffect(()=>{
    fetchApi()
  },[setFilterData])

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
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile &rarr;
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
