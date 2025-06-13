import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layouts/CountryCard';
import SearchFilter from '../Components/UI/SearchFilter';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  },[])

  if(isPending) return <Loader />

  // Search Functionality
  const searchCountry = (country) => {
    if(search) {
      return country?.name?.common?.toLowerCase().includes(search?.toLowerCase());
    } 
    return country;
  }

  // Filter Functionality
  const filterRegion = (country) => {
    if(filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = countries?.filter((country) => {
    return searchCountry(country) && filterRegion(country)
  })

  return (
    <>
      <section className="country-section">
        <SearchFilter 
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        <ul className="grid grid-four-cols">
          {
            filterCountries?.map((country,index) => {
              return <CountryCard country={country} key={index} />
            })
          }
        </ul>
      </section>
    </> 
  )
}

export default Country;