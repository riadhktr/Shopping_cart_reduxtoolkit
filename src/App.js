
import './App.css';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { useDispatch,useSelector } from 'react-redux';
import { calculateTotals, filtred } from './features/cart/cartSlice';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import { useSelect } from '@mui/base';


function App() {
 
 let {produit} = useSelector((state)=>state.cart)
 const {isOpen} = useSelector(state=>state.modal)
const [value,setValue] = useState('') 
const [data,setData] = useState()
const [error,setError] = useState() 
const [user,setUser] = useState()
console.log(produit);
 const dispatch = useDispatch();

 const addUser = ()=>{
  fetch("https://hn.algolia.com/api/v1/search?query=redux",
  {
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(user)

  }
  )
 }


const  fetchData = async()=>{
let res =await fetch("https://hn.algolia.com/api/v1/search?query=redux").then(res=>res.json()).then(res=>setData(res)).catch(err=> setError(err)) 
  return res
 
}


useEffect(()=>{
// dispatch(calculateTotals())
fetchData()

},[])


  return (
    <div className="App">
     <div>
      <input type='text' onChange={(e)=>setUser(e.target.value)}/>
     </div>
      {/* {data.hits.map(item=>{
        return <h1>{item.author}</h1>
      })} */}
      {/* {isOpen && <Modal/>}
      
      <NavBar/>

      <select onChange={(e)=>setValue(e.target.value)}>
        <option value="Pizza">Pizza</option>
        <option value="Tacos">Tacos</option>
      </select>
      <button onClick={()=>dispatch(filtred(value))}>search</button>
      
      <CartContainer value={value}/>
      */}
    </div>
  );
}

export default App;
