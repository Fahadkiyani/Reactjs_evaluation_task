import { React, useState, useEffect } from 'react'
import './weatherReport.css'
import axios from 'axios'

export default function WeatherReport() {
    const [isvalid, setIsValid] = useState(false);
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);
    // const [woeid, setWoeid] = useState(44418);
    useEffect(() => {
        console.log(city);
        getData();
        // console.log(data);
        setIsValid(false);
    }, [isvalid]);

    async function getData() {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=c705f98a62af46d6bd0151156213010&q=${city}`);
            setData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const submitHandler = (e) => {
        setIsValid(true);
        e.preventDefault();
    }
    return (
        <div>
            <h1>weather app</h1>
            <form onSubmit={submitHandler}>
                <label>
                    <p>City: </p>
                    <input type="text" placeholder="Enter a valid city name" value={city} onChange={(e) => { setCity(e.target.value) }} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            {
                (data.length > 0)
                    ?
                    <div className="container">
                        <div className="city_details">
                            <p className='p'>{data[0].location.name}, </p>
                            <p className='p'>{data[0].location.region},  </p>
                            <p className='p'>{data[0].location.country}  </p>

                        </div>
 
                        <div className="condition">
                            <h5>Forecast: </h5>
                            <img src={data[0].current.condition.icon} alt="Logo" />
                            <p>{data[0].current.condition.text}</p>
                        </div>

                        <div className="other_data">
                            <h6>Other Data: </h6>
                            
                            <p>wind: {data[0].current.wind_kph} kph</p>
                            <p>pressure: {data[0].current.pressure_in} in</p>
                            <p>humidity: {data[0].current.humidity} </p>
                            <p>cloud: {data[0].current.cloud} </p>


                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    )
}
