import React, {useState, useEffect} from "react";
import PhotoOfTheDay from './components/PhotoOfTheDay.js'
import axios from 'axios'
import "./App.css";

function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PhotoOfTheDay spaceData={nasaData}/>
    </div>
  );
}

export default App;
