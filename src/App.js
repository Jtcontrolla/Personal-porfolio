import './App.css';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
       <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
       </>
    </div>
  );
}

export default App;
