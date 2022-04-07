import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App(){
  //useEffect hook tells our component app to do something
  // after rendering
  const [allData, setAllData] = useState({
    city:'',
    country:'',
    temperature:''
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
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'rome'}&appid=${APIKEY}`);
    
    await setAllData({
      city: result,
      country: result.data.sys.country,
      temperature: result

    })
  } catch(e){
    console.log('API not loaded correctly or loaded for the 1st time')
  }
  }

  return( 
    <div className="App">
      {console.log("testing 123", allData.country)}

    </div>
  );
}

export default App;