// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Products from './components/Products.jsx'
import './App.css';
// eslint-disable-next-line no-unused-vars
import Nextproduct  from './components/nextProduct.jsx'
function App() {
  return (
    <>
    <div className="App">
      <h1 className='header'>Pingucoder 🐧</h1>
    </div>
    <div className='dsplay'>
      <div style={{ height: '100%'}} >
        <Products  content1="client-side routing and" content2="non-root public URL by running"/>
        <Products name="nizal" content1="client-side hhhhhhhdfgd" content2="non-root public URL by running"/>
        <Products name="wassim" content1="client-side and" content2="the development, run `npm start` or `yarn start"/>
        <Products name="tesnim" content1="directly fjkn' efrn dfenf u" content2="meta tags, or analytics to this file."/>
        <Products name="wissal" content1="directly in the browser, you" content2="step will place the bundled scripts"/>
      </div>
      <div style={{ height: '100%'}} className={'secondProduct'}>
        <Nextproduct>
        <i class="fa-brands fa-facebook"><a href="https://www.facebook.com/"> facebook</a></i>
        
        </Nextproduct>
        <Nextproduct>
        <i class="fa-brands fa-instagram"><a href="https://www.instagram.com/"> instagram</a></i>
        </Nextproduct>
        <Nextproduct>
        <i class="fa-brands fa-x-twitter"><a href="https://www.twitter.com/"> twitter</a></i>
        </Nextproduct>
      </div>
    </div>
    </>
  );
}

export default App;
