import React from 'react'
import './weather.module.css'

const Weather = () => {

    //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3383941811c4c440da18faefe8010df3`

    //http://api.openweathermap.org/geo/1.0/direct?q=dallas&limit={limit}&appid=3383941811c4c440da18faefe8010df3

    return (
        <div className="app">
            <div className="search">

            </div>
            <div className="container">
                <div className="top">
                    <div className="location">

                    </div>
                    <div className="temp">

                    </div>
                    <div className="description">

                    </div>
                </div>


                <div className="bottom">
                    <div className="feels">

                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">

                        <p>Humidity</p>
                    </div>
                    <div className="wind">

                        <p>Wind Speed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather