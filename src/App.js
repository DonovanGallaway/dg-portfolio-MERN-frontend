import './App.css';

import Header from './components/Header'
import Footer from './components/Footer';
import About from './pages/About'
import Home from './pages/Home';
import Projects from './pages/Projects'
import {Route, Routes} from 'react-router-dom'

function App() {
  const URL = 'https://donovangallaway-portfolio.herokuapp.com/'
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/projects' element={<Projects URL={URL}/>}/>
        <Route exact path='/about' element={<About URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
