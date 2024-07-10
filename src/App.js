
import './App.css';
import Heading from './components/Heading';
import Features from './components/Features';
import Price from './components/Price';

function App() {
  const priceObj = {
    popularity: "Popular",
    totalPrice: 999,
    priceUnit: '$'
  }
  return (
    <div className="App">
      <Heading/>
      <div className='price-features-wrapper'>
        <Features/>
        <Price priceObj={priceObj}/>
      </div>
    </div>
  );
}

export default App;
