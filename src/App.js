// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Products from './components/Products.jsx'
import './App.css';
// eslint-disable-next-line no-unused-vars
import Nextproduct  from './components/nextProduct.jsx'
const listeTest = [
  {id : 1 , content1 :"client-side routing and" ,content2 :"non-root public URL by running" },
  {id : 1 , name : "nizal", content1 :"client-side hhhhhhhdfgd" , content2 : "non-root public URL by running" },
  {id : 1 , name : "wassim" ,content1 : "client-side and" ,content2 : "the development, run `npm start` or `yarn start" }
]
const MyListeTeste = listeTest.map((liss) => {
  return (<Products content1 = {liss.content1} content2 = {liss.content2} name = {liss.name} /> )
})
const myButton = [
  {a : <i class="fab fa-facebook"><a href="https://www.facebook.com/"> facebook</a></i>},
  { a : <i class="fab fa-instagram"><a href="https://www.instagram.com/"> instagram</a></i> },
  { a :<i class="fab fa-x-twitter"><a href="https://www.twitter.com/"> twitter</a></i> }
]
const ButtonList = myButton.map((but) => {
  return (<Nextproduct> {but.a}</Nextproduct> )
})
function App() {
  return (
    <>
    <div className="App">
      <h1 className='header'>Pingucoder 🐧</h1>
    </div>
    <div className='dsplay'>
      <div style={{ height: '100%'}} >
        {MyListeTeste}
      </div>
      <div style={{ height: '100%'}} className={'secondProduct'}>
        {ButtonList}
      </div>
    </div>
    </>
  );
}

export default App;
