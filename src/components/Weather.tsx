import "./LeftSide.css"

const findIcon = (condition) => {
    let icon;
    switch (condition) {
      case "Clear":
        icon = "fa-cloud";
        break;
      case "Sunny":
        icon = "fa-sun";
        break;
      case "Mist":
        icon = "fa-cloud-meatball";
        break;
      case "Cloudy":
        icon = "fa-cloud";
        break;
      case "Partly cloudy":
        icon = "fa-cloud-sun";
        break;
      case "Overcast":
        icon = "fa-smog";
        break;
      case "Blizzard":
        icon = "fa-meteor";
        break;
      case "Fog":
        icon = "fa-smog";
        break;
      case "Light rain":
        icon = "fa-cloud-rain";
        break;
      case "Medium rain":
        icon = "fa-cloud-rain";
        break;
      case "Heavy rain":
        icon = "fa-cloud-showers-heavy";
        break;
      case "Light snow":
        icon = "fa-snowflake";
        break;
      case "Medium snow":
        icon = "fa-snowflake";
        break;
      case "Heavy snow":
        icon = "fa-icicles";
        break;
      default:
        icon = "fa-cloud";
    }
    return icon;
  };
  
    // Time and date
    const time = new Date().toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });


const CurrentWeather = () => {
    return (
        <div className="weather">
            <h3 className="current-date">date</h3>
            <div className="current-weather">
                <image className="weather-icon" src="" />
                <h1 className="temperature">Tem</h1>
            </div>
                <h2 className="weather-des">Cloudy</h2>
            <div className="bottom">
                <p className="humidity">Humidity</p>
                <p className="wind-speed">Wind Speed</p>
            </div>
        </div>
    ) ;
}
export default CurrentWeather;