//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Axiosapi from './components/pages/Axiosapi';
import UseEffectApi from './components/pages/UseEffectApi';

function App() {
  return (
    <>
      
      {/* <Header />
        <Router>
          <Routes>
            <Route exact  path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
      <Footer /> */}
     

     {/* <Axiosapi /> */}

     <UseEffectApi/>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
