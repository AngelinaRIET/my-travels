import React from 'react';


const Travel = (props) => {
    return (
        <div>
            <p>{props.destination}</p>
            <p>{props.country}</p>
            <img src={props.photo}></img>
            <p>{props.distance}</p>
        </div>
    )

}






export default Travel;



