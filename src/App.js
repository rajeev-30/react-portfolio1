import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/intro'
import Services from './Components/Services/services'
import Experience from './Components/Experience/experience'
import Works from './Components/Works/works'
import "./App.css"
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testinomial/Testinomial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import {themeContext} from './Context';
import { useContext } from 'react'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      {/* <Works/> */}
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
