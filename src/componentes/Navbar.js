import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar =() => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Empilchadxx</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" > 
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                            </li>
                            
                        </ul>

                           
                    </div>
                    <div className="carrito"> 
                        <AiOutlineShoppingCart/>
                    </div>    
                </div>
            </nav>
        </div>
        
    )
  }
  
  export default Navbar;