import SearchBox from "./SearchBox"; 
import InfoBox from './InfoBox';
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 26.16,
        temp:26.16,
        temMin:26.16,
        temMax:26.16,
        humidity:88,
        weather:"overcast clouds",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}>
            <h2>
                Weather App by delta
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}