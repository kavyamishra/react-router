import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import Contacts from './Contacts';
import Gallery from './Gallery';
import Info from './Info';
import About from './About';

function App() {
  return (
    <>
      <div classNameName="App">
        <nav>
          <ul className='list'>
            <li className='link'><Link to="/" >Home</Link></li>
            <li className='link'><Link to="/info">Info</Link></li>
            <li className='link'><Link to="/gallery">Gallery</Link></li>
            <li className='link'><Link to="/contacts">Contact</Link></li>
            <li className='link'><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/info' element={<Info />} />
        <Route path='/gallery' element={<Gallery />} />

      </Routes>
    </>
  );
}

export default App;