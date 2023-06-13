import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Content from './components/Content';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Content />
      <div className=" h-24"></div>
    </>
  );
}

export default App;
