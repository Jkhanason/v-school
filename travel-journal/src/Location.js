import React from 'react'

function Location (props) {
    const place = props.place
    return (
        <div className="details-container">
            <div className="details-img">
                <img src={place.imageUrl} alt={`${place.title} ${place.location}`}/>
            </div>
            <div className="details-info">
                <div className="details-title">
                    <p className="title"> <i className="fa-solid fa-location-dot"></i>{place.location.toUpperCase()} </p>
                    <a href={place.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                    <h1> {place.title} </h1>
                    <h5> {place.startDate} - {place.endDate} </h5>
                    <p className="description"> {place.description} </p>
                </div>
            </div>
        </div>
    )
}

export default Location