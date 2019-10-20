import React from 'react';


const Travel = ({ destination, country, photo, distance }) => {
    return (
        <div>
            <p>{destination}</p>
            <p>{country}</p>
            <img src={photo} alt={`${Travel.destination}`} width="200" />
            <p>{distance}</p>
        </div>
    )

}









export default Travel;



