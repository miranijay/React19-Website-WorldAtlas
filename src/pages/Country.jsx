import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layouts/CountryCard';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  },[])

  if(isPending) return <Loader />

  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {
            countries.map((country,index) => {
              return <CountryCard country={country} key={index} />
            })
          }
        </ul>
      </section>
    </> 
  )
}

export default Country;