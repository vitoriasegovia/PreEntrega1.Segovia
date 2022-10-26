import './App.css'
import Navbar from './componentes/Navbar';
import Alert from './componentes/ItemListContainer'
import { AiOutlineShoppingCart } from "react-icons/ai";


const App =() => {
  return(
    <>
    <Navbar/>
    <Alert texto="Bienvenidos"/>
    
    </>
   
  )
}

export default App;