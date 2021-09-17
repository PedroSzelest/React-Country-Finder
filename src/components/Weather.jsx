import React, { useState } from "react"
import useFetch from "../hooks/useFetch"

const Weather = ({ city }) => {
    const { data } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551d0db084c0023d343880c9665327d3`)

    const [callWeather, setCallWeather] = useState(false)

    const changeCallWeather = ()=> {
        setCallWeather(true)
        console.log(city, data)
    }

    if(!callWeather) {
        return(
            <button className="weather-button" onClick={changeCallWeather}>CAPITAL CLIMATE</button>
        )
    } else {
        return (
            <div className="weather-container">
                <div className="weather">
                    <h4>WEATHER</h4>
                    <div className="main-weather">
                        <p>Main wheather:</p>
                        <p>{data.weather[0].main}</p>
                    </div>
                        <div className="temperature">
                            <p>Temperature (C°):</p>
                            <p>{(data.main.temp - 273.15).toFixed(2)}</p>
                        </div>
                        <div className="thermal-sensation">
                            <p>T. sensation (C°):</p>
                            <p>{(data.main.feels_like - 273.15).toFixed(2)}</p>
                        </div>
                        <div className="min-temp">
                            <p>Min temperature (C°):</p>
                            <p>{(data.main.temp_min - 273.15).toFixed(2)}</p>
                        </div>
                        <div className="max-temp">
                            <p>Max temperature (C°):</p>
                            <p>{(data.main.temp_max - 273.15).toFixed(2)}</p>
                        </div>
                        <div className="pressure">
                            <p>Pressure (hPa):</p>
                            <p>{data.main.pressure}</p>
                        </div>
                        <div className="humidity">
                            <p>Humidity (%hr):</p>
                            <p>{data.main.humidity}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Weather