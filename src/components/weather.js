import React, { useState, useEffect } from "react";
import './weather.css'

const TempApp = () => {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Lucknow");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a8e8a53608f99d0e0ad06219b8b251bc`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main)
        };
        fetchAPI();
    }, [search])


    return (
        <>
            <div className="wrapper">
                <div className="input-box">
                    <input type="search" name="search" id="search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>

                {
                    !city ? (
                        <p>No city Found</p>
                    ) : (
                        <>
                            <div className="info">
                                <p>
                                    <i class='bx bx-street-view' ></i>{search}
                                </p>
                                <h1>{city.temp}°C</h1>
                                <h3>{city.temp_min}°C || {city.temp_max}°C</h3>
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}

export default TempApp;