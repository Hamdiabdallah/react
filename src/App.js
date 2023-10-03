// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Products from './components/Products.jsx'
import './App.css';
import './components/style.css'
// eslint-disable-next-line no-unused-vars
import Nextproduct  from './components/nextProduct.jsx'
const myProduct = "tree";
const myListe =[
  { id : "1", name : "html"},
  { id: "2" , name : "react"}
]
const NewListe = myListe.map( (list, index) => {
  return ( <li key ={list.id}>{list.name}</li>);
})
function App() {
  return (
    <>
    <div className="App">
      <h1 className='header'>Pingucoder 🐧</h1>
    </div>
    <ul>
      {NewListe}
    </ul>
    
    
    
    </>
  );
}
function TestProduct(){
  if(myProduct === "tree"){
    return ( <Nextproduct ><i class="fa-brands fa-facebook"><a href="https://www.facebook.com/"> facebook</a></i></Nextproduct>)
  }else {
    return <div></div>
  }

  
  // eslint-disable-next-line no-lone-blocks
  // {myProduct === "tree" ? (<Nextproduct><i class="fab fa-facebook"><a href="https://www.facebook.com/"> facebook</a></i></Nextproduct>) : (<div></div>)}

}

export default App;
