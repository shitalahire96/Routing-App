import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom'
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>This is react router app</h1>
      {/* <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/> */}
     
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
        </Routes>
      

      <Footer/> 

      
    </div>
  );
}

export default App;
