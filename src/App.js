// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Products from './components/Products.jsx'
import MyInput from './components/myInput';
import './App.css';
// eslint-disable-next-line no-unused-vars

import NextProduct from './components/nextProduct.jsx';

function App() {
  return (
    <>
    <div className="App">
      <h1 className='header'>Pingucoder 🐧</h1>
    </div>
    <div className='dsplay'>
      <MyInput/>
    </div>
    </>
  );
}

export default App;
