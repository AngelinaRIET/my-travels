import React from 'react';

const travels =
    [
        {
            destination: "San Francisco",
            country: "USA",
            photo: "https://cdn.pixabay.com/photo/2016/01/01/02/03/san-francisco-1116208_1280.jpg",
            distance: "9117 km",
        },
        {
            destination: "Rio de Janeiro",
            country: "Brazil",
            photo: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
            distance: "7716 km",
        },
        {
            destination: "Ljubljana",
            country: "Slovenia",
            photo: "https://cdn.pixabay.com/photo/2018/12/04/09/06/ljubljana-3855146_1280.jpg",
            distance: "2096 km",
        },
        {
            destination: "Budapest",
            country: "Hungary",
            photo: "https://cdn.pixabay.com/photo/2014/11/10/20/07/budapest-525857_1280.jpg",
            distance: "2469 km",
        },
        {
            destination: "Munich",
            country: "Germany",
            photo: "https://cdn.pixabay.com/photo/2012/10/26/09/38/bavaria-63268_1280.jpg",
            distance: "1873 km",
        }
    ]
const Travels = () => (
    <div>
        {travels.map(Trip =>
            <div>

                <p>{Trip.destination}</p>
                <p>{Trip.country}</p>
                <img src={Trip.photo} alt={`${Trip.destination}`} width="200" />
                <p>{Trip.distance}</p>

            </div>)}


    </div>
)


export default Travels;

