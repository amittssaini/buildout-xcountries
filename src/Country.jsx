import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './country.css'


const Country = () => {
   const [countriesFlag,setCountriesFlag]=useState([]);
    
    const fetchData=async()=>{
        let url ='https://restcountries.com/v3.1/all';
        console.log('hello world');
        try {
            let response = await axios.get(url);
           console.log(response.data);
           let tempData = response.data;
           setCountriesFlag(tempData)
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(()=>{
      fetchData();
    },[]);
  return (
    <div className='card-container'>
      {
        countriesFlag.map((country)=>{
          return(
            <div key={country.name.common} className='card-style'>
            <img src={country.flags.png} alt={country.flags.alt}  className='image-style'/>
            <h2>{country.name.common}</h2>
          </div>
          )
        })
      }
    </div>
  )
}

export default Country