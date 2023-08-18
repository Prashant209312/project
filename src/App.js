import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import MainContainer from './components/MainContainer';

import Navbar from './components/navbar';
import SecondContainer from './components/secondContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondContainer />
      <Heading />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
