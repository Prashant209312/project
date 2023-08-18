import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import MainContainer from './components/MainContainer';
import SlideShow from './components/SlideShow';
import Navbar from './components/navbar';
import SecondContainer from './components/secondContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondContainer />
      <Heading />
      <SlideShow />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
