import './App.css';
import Home from './Pages/Home';
import AboutUs from './components/About';
import AddCart from './components/AddCart';
import NavBar from './components/NavBar';
import Toaster from './components/Toaster';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <Toaster />
      <AddCart />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
