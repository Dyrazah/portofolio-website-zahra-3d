import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Projects, Hero, Navbar, Tech, StarsCanvas, School } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </div>
        <About />
        <School />
        <Tech />
        <Experience />
        <Projects />

        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
