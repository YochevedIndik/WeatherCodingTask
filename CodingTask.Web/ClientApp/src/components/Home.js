import React, { useState, useEffect } from "react";
import axios from 'axios';



const Home = () => {
    const [currentTemperature, setCurrentTemperature] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const [windSpeed, setWindSpeed] = useState();
    const [windDirection, setWindDirection] = useState();
    const [humidity, setHumidity] = useState();
    const [feelsLike, setFeelsLike] = useState();
    const [icon, setIcon] = useState();
    const [date1, setDate1] = useState();
    const [date2, setDate2] = useState();
    const [date3, setDate3] = useState();
    const [maxTemp1, setMaxTemp1] = useState();
    const [minTemp1, setMinTemp1] = useState();
    const [maxTemp2, setMaxTemp2] = useState();
    const [minTemp2, setMinTemp2] = useState();
    const [maxTemp3, setMaxTemp3] = useState();
    const [minTemp3, setMinTemp3] = useState();

 useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: '08701', days: '3' },
            headers: {
                'X-RapidAPI-Key': 'b802daefbdmshdd83e208cdae47ap17795bjsna0140e0b4feb',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setCurrentTemperature(response.data.current.temp_f);
            setLocation(response.data.location.name);
            setDescription(response.data.current.condition.text);
            setWindSpeed(response.data.current.wind_mph);
            setWindDirection(response.data.current.wind_dir);
            setHumidity(response.data.current.humidity);
            setFeelsLike(response.data.current.feelslike_f);
            setDate1(response.data.forecast.forecastday[0].date);
            setDate2(response.data.forecast.forecastday[1].date);
            setDate3(response.data.forecast.forecastday[2].date);
            setMaxTemp1(response.data.forecast.forecastday[0].day.maxtemp_f);
            setMinTemp1(response.data.forecast.forecastday[0].day.mintemp_f);
            setMaxTemp2(response.data.forecast.forecastday[1].day.maxtemp_f);
            setMinTemp2(response.data.forecast.forecastday[1].day.mintemp_f);
            setMaxTemp3(response.data.forecast.forecastday[2].day.maxtemp_f);
            setMinTemp3(response.data.forecast.forecastday[2].day.mintemp_f);
            setIcon(response.data.current.condition.icon);

        })
            .catch(function (error) {
                console.error(error);
            });

    }, [])

    return (
        <>
            <div className="container" >
                <div className="jumbotron">
                    <div className="page-header">
                        <h1 style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', color: 'gray' }}>Current Weather in {location} </h1>
                        <h2 style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', color: 'red' }}>Temperature: {currentTemperature}</h2>

                    </div>

                    <img src={icon} />
                    <h4>Condition: {description}</h4>
                    <h4>Wind Speed: {windSpeed}</h4>
                    <h4>Wind Direction: {windDirection}</h4>
                    <h4>Humidity: {humidity}</h4>
                    <h4>Real Feel: {feelsLike}</h4>
                    <div className="col-lg-12">
                        <div className="container">
                            <h2 style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', color: 'gray' }}>   3 Day Weather Forecast for {location}</h2>
                            <div className="row">
                                <table className="table-striped table-bordered table-light" >
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Date </th>
                                            <th>High Temperature</th>
                                            <th>Low Temperature</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{date1} </td>
                                            <td>{maxTemp1} </td>
                                            <td>{minTemp1} </td>
                                        </tr>
                                        <tr>
                                            <td>{date2} </td>
                                            <td>{maxTemp2} </td>
                                            <td>{minTemp2} </td>
                                        </tr>
                                        <tr>
                                            <td>{date3} </td>
                                            <td>{maxTemp3} </td>
                                            <td>{minTemp3} </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Home;



