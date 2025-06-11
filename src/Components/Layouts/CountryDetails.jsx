import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../UI/Loader';
import { getCountryIndData } from '../../api/postApi';

const CountryDetails = () => {

    const param = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([])

    useEffect(() => {
        startTransition(async() => {
        const res = await getCountryIndData(param.id);
        if(res.status === 200) {
            setCountry(res.data[0]);
        }
        })
    },[])

  if(isPending) return <Loader />
     
  return (
    <section className='card country-details-card container'>
        <div className="container-card bg-white-box">
            
        </div>
    </section>
  )
}

export default CountryDetails;