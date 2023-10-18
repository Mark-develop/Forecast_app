
const  Weather = props => (
    <div className="infoWeath"> 
    {props.city &&
        <div>
            <p>{props.city}, {props.country}</p>
            <p>temperature: {props.temp}ºC</p>
            <p>feels like:  {props.ftemp}ºC</p>
            <p>sunset: {props.sunset}</p>
        </div>
    }
    <p className="error">{props.error}</p>
  </div>
);

export default Weather