import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import Mission from "./components/mission/Mission";
import About from "./components/About/Aboutus"
import Nftcollection from "./components/Nft-Collection/Nftcollection" 
import Imageslider from "./components/Slider/Imageslider"
import Discord from "./components/Discord/Discord"
import Roadmap from "./components/Roadmap/Roadmap"
import Team from './components/Team/Team';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Nftcollection/>
      <Imageslider/>
      <Roadmap/>
      <Mission/>
      <Team/>
      <Discord/>
      <Footer/>
    </div>
  );
}

export default App;
