import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import MainContainer from './components/MainContainer';
import Slide from './components/Slide';

import Navbar from './components/navbar';
import SecondContainer from './components/secondContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondContainer />
      <Heading />
      <Slide />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
