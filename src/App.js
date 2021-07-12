import "./App.css";
import sunny from "./assets/images/01.svg";
import rain from "./assets/images/09.svg";
import warm from "./assets/images/17.svg";

const weatherInfo = [
  {
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDey: "Tuesday",
    imgURL: warm,
    temp: "32C",
  },
  {
    weekDey: "Wednesday",
    imgURL: rain,
    temp: "35C",
  },
  {
    weekDey: "Thursday",
    imgURL: rain,
    temp: "45C",
  },
  {
    weekDey: "Friday",
    imgURL: rain,
    temp: "36C",
  },
  {
    weekDey: "Saturday",
    imgURL: warm,
    temp: "37C",
  },
  {
    weekDey: "Sunday",
    imgURL: sunny,
    temp: "39C",
  },
];

const newArr = weatherInfo.map((item) => {
  return (
    <div className="aboutWeather">
      <h1 className="weekDey">{item.weekDey}</h1>
      <img className="image" src={item.imgURL} />
      <p className="temp">{item.temp}</p>
    </div>
  );
});
console.log(newArr);

function App() {
  return <div className="App">{newArr}</div>;
}

export default App;
