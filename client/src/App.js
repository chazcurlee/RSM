import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'

import Landing from './pages/Landing';
import List from './pages/List'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Top10 from './pages/Top10'
import Details from './pages/Details'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/list' element={<List />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/top10' element={<Top10 />} />
        <Route path='/list/:name/:lati/:long' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
