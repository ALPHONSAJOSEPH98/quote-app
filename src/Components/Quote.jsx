import React, { useEffect, useState } from 'react'

function Quote() {
    const [quotes , setData] = useState({})
    const[random ,randomnumber] =useState(0)
    const randoM=Math.floor(Math.random()*30)
    const id =randoM
    const fetchQuote=async()=>{
        const response = await fetch(`https://dummyjson.com/quotes/${id}`)
        .then(response=>response.json())
         console.log(response);
         setData(response)
         console.log(quotes);
         
        
       
        
        
    }
    useEffect(()=>{fetchQuote()},[])
  return (
    <div >
        <div style={{backgroundColor:"aliceblue"}}   className='col-6  mt-5 mb-5 border rounded card shadow  container'>
          <div className='text-center ' >
         <button className='btn btn-dark mb-3 mt-3' onClick={fetchQuote}>get quotes</button>
          <div className='  w-50 container mt-5'>
         <h3 className=' ' >Quote : '{quotes.quote}'</h3>
         <h4 className=''>Author : {quotes.author}</h4>
         </div> <br /><br /><br /><br />
         </div>
       
        </div>
    </div>
  )
}

export default Quote