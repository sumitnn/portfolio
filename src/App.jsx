import './App.css'
import About from './Components/About'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Contact from './Components/Contact'
import Comments from './Components/Comments'
import Experience from './Components/Experience'
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import info from "./data/data";


function App() {

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Comments />
      <Contact />
      <Footer />
    </>
  );
}

export default App
