"use client"
import React, { useState } from 'react';
 
 
import NameForm from './NameForm';
import Result from './Result';

const IndexPage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const fetchData = async (name) => {
    setLoading(true);
  
    try {
      const [agifyResponse, genderizeResponse, nationalizeResponse] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`),
        fetch(`https://api.genderize.io?name=${name}`),
        fetch(`https://api.nationalize.io?name=${name}`),
      ]);
      const [agifyData, genderizeData, nationalizeData] = await Promise.all([
        agifyResponse.json(),
        genderizeResponse.json(),
        nationalizeResponse.json(),
      ]);
      let highestProbability = 0;
  let mostProbableCountry = '';
  
  nationalizeData.country.forEach(country => {
    if (country.probability > highestProbability) {
      highestProbability = country.probability;
      mostProbableCountry = country.country_id;
    }
  });
  console.log(mostProbableCountry,'mostProbableCountrydfdsfsdf');
      setResult({
        age: agifyData.age,
        gender: genderizeData.gender,
        country: mostProbableCountry || 'Unknown',
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  

  };

  return (
    <div className='bg-neutral-950  '>
      <h1>Name Guessing App</h1>
      <NameForm onSubmit={fetchData} />
      {loading && <p>Loading...</p>}
      {result && <Result {...result} />}
    </div>
  );
};

export default IndexPage;
