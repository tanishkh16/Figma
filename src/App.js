import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Join from './Component/Join';
import Earth from './Component/Earth';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Join/>
      <Earth/>
      <Footer/>
      
    </div>
  );
}

export default App;
