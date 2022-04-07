import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App(){
  //useEffect hook tells our component app to do something
  // after rendering
  const [allData, setAllData] = useState({
    city:'atlanta',
    country:'',
    temperature:''
  })


  useEffect(() =>{
    // we add what we wawnt to happen after rendering
    // fetch the database info the API call of weather
    fetchData()

  }, [])


  const fetchData = async(city) => {
    const APIKEY = '4fbc70ea7de61f44e79330f6546ebe46';

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'atlanta'}&appid=${APIKEY}`);
    
    await setAllData({
      city: result,
      country: result.data.sys.country,
      temperature: result

    })



  }




  return( 
    <div className="App">
      {console.log("testing 123", allData.city)}

    </div>
  );
}

export default App;