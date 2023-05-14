import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Portofolio from './components/portofolio/Portofolio';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        {/* <About /> */}
        <Qualification />
        <Skill />
        <Portofolio />
        <Contact />
        <Footer />
        <Scrollup />
      </main>
    </>
  );
}

export default App;
