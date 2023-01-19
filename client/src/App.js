import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'

import Landing from './pages/Landing';
import List from './pages/List'
import Details from './pages/Details'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // State used to store Atlanta results from OpenBrewery API
  const [brew, setBrew] = useState([]);

  useEffect(() => {
    // Making call to OpenBrewery to return all Atlanta Breweries and setting in 'brew' state
    const getBrew = async () => {
      let newBrew = await axios.get(
        "https://api.openbrewerydb.org/breweries?by_city=atlanta"
      );
  
      setBrew(newBrew.data);
    };
    getBrew();
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/list' element={<List brew={brew}/>} />
        <Route path='/list/:name/:id/:lati/:long' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
