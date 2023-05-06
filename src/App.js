import React, { useState } from 'react'

const countries =[
  {
    name:'india',
    value:'IN',
    cities:[
      'Delhi',
      'mumbai'
    ]
  },
  {
    name:'pak',
    value:'PK',
    cities:[
      'Lahore',
      'karachi'
    ]
  },
  {
    name:'Bangladesh',
    value:'BG',
    cities:[
      'Dhaka',
      'Chittagong'
    ]
  },
  {
    name:'America',
    value:'Am',
    cities:[
      'Dallas',
      'losAngeles'
    ]
  },
]



const App = () => {

  const [country,setCountry] =useState({name:'', value:'', cities:[]})




  return (
    <div>
      <center>
        <select value={country} onChange={(e)=>{
          console.log(e.target.value)
          setCountry(e.target.value)}}>
          {countries.map((item,index)=>{
            return <option value={index}>{item.name}</option>})}
        </select>

        <select value={country}>

        </select>
      </center>
    </div>
  )
}

export default App
