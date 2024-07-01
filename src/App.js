import './App.css';
import Home from './Pages/Home';
import AboutUs from './components/About';
import AddCart from './components/AddCart';
import Footer from './components/Footer';
import Lower from './components/Lower';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <AddCart />
      <Lower />
      <Footer />
    </div>
  );
}

export default App;
