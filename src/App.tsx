import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Projects />
      <div className=" h-24"></div>
    </>
  );
}

export default App;
