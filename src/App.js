import logo from './logo.svg';
import './App.css';
import NavBar from './Sections/NavBar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Events from './Sections/Events';
import TeamPage from './Sections/TeamPage';

function App() {
  return (
    <div className='bg-primary-black'>

      <div
        style={{
          maxHeight: '100vh',
          overflow: "hidden",
        }}
      >
       
        <NavBar />
        <Hero />

      </div>
      <About />
      <Events/>
      <TeamPage/>
    </div>
  );
}

export default App;
