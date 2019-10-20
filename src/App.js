import React from 'react';
import './App.css';
import Travel from './Travel';
import Travels from './Travels';

function App() {
  return (
    <>
      <Travel
        destination='Lisbon'
        country='Portugal'
        photo='https://cdn.pixabay.com/photo/2016/06/11/20/47/lisbon-1450809_1280.jpg'
        distance='OKm'

      />
      <Travel
        destination='Paris'
        country='France'
        photo='https://cdn.pixabay.com/photo/2016/11/23/18/10/architecture-1854130_1280.jpg'
        distance='1800km'
      />
      <Travels />

    </>
  )
}



export default App;
