import logo from './logo.svg';
import  'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from "./components/CountryDetails"



function App() {
  return (
    <div className="App">
    <Navbar/>
    <div class="columns">

      <div class="column">
      <CountriesList /> 
      </div>
      <div class="column">
      Details: 
      <Routes>
        <Route path="/:id" element={ <CountryDetails/>} />
        </Routes>
      </div>
      </div>
</div>
    
    

  );
}

export default App;
