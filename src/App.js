import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// EXERCISE:
// Add Humidity, Min tempearature, and weather icons


function App(){
  //useEffect hook tells our component app to do something
  // after rendering
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState({
    city:'',
    country:'',
    temperature:'',
    airHumid:'',
    tempMin:'',
    icon:'',
    description: ''
  })

  useEffect(() =>{
    // we add what we wawnt to happen after rendering
    // fetch the database info the API call of weather
    fetchData()

  }, [])

  const fetchData = async(city) => {
    //try catch error handling for when axios is down
    try{
    const APIKEY = '4fbc70ea7de61f44e79330f6546ebe46';
    // this is how to use axios
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
    
    await setAllData({
      city: result.data.name,
      country: result.data.sys.country,
      temperature: result.data.main.temp,
      airHumid: result.data.main.humidity,
      tempMin: result.data.main.temp_min,
      //watch out for array
      icon: result.data.weather[0].icon,
      description: result.data.weather[0].description

    })
  } catch(e){
    console.log('API not loaded correctly or loaded for the 1st time')
  }
  }

  const changeHandler = (event) =>{
    setSearch(event.target.value)
    
  }

  const submitHandler = (event) =>{
    console.log(search);
    event.preventDefault();
    fetchData(search)

  }

  return( 
    <main>
    <div className="App">
      <form onSubmit={submitHandler}>
        <input value = {search} type = 'text' name ='city' placeholder='cityname' onChange={changeHandler}/>
        <button for='city'>Search</button>
      </form>

      <section>
        <img src={'http://openweathermap.org/img/wn/'+ allData.icon +'@2x.png'}/>
        <h1>{allData.city}</h1>
        <h1>{allData.country}</h1>
        <h2>Temperature</h2>
        <p>{allData.temperature}*C</p>
        <h2>Air Humid</h2>
        <p>{allData.airHumid}%</p>
        <h2>Min Temperature</h2>
        <p>{allData.tempMin}*C</p>
        <h2>Description</h2>
        <p>{allData.description}</p>
      
      </section>

    </div>
    </main>
  );
}

export default App;