import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
const App = () => {
  useEffect(()=>{
    fetchDataFromApi("movie/popular").then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  return (
    <div className='App'>
      App
    </div>
  )
}

export default App
