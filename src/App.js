import {useEffect, useState} from "react";
import './App.css';
import api from "./services/api";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([])
  async function fetchData() {
    const response = await api.get("products")
    setProducts(response.data);
    console.log(response.data);
  }
  useEffect(() => {fetchData()}, [])
  return (
<div className="App">
      <div>
  <nav className="navbar navbar-expand-sm navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="https://livedemo00.template-help.com/wt_60075_v2/images/logo-light-148x30.png" width="142"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tours</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Galeria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contato</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-light ml-5" href="#">Entrar</a>
          </li>
        </ul>  
      </div>
    </div>
  </nav>
</div>
  <section className="home">
    <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-white">Desfrute das suas férias do sonho</h1>
          <p className="text-white">Viajar para qualquer canto do mundo, sem andar em círculos.</p>
          <form className="registration-form">
            <div className="form-group">
              <input type="text" className="form-control item" id="destino" placeholder="Seu destino"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control item" id="chegada" placeholder="Chegada"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control item" id="saida" placeholder="Saída"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control item" id="preco" placeholder="Preço"/>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-block search">Pesquisar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}

export default App;
