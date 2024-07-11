import logo from './logo.svg';
import Home from './components/home/Home.js'; 
import Navbar from './components/Navbar/Navbar.js'
import './App.css';

function App() {
  return (
   /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React dd
        </a>
      
        <Home/>
        <Navbar/>
      </header>
     
    </div>*/

    <div className="App">  
    
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
