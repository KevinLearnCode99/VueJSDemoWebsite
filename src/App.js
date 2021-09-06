import "./fontawesome-free-5.15.4-web/css/fontawesome.css"
import "./fontawesome-free-5.15.4-web/css/brands.css"
import "./fontawesome-free-5.15.4-web/css/solid.css"


import './App.css';
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner";
import Body from "./components/Body"
import Footer from "./components/Footer";


function App(){
  return(
    <div>
      <Navbar/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
    
  )
}

export default App;