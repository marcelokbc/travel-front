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
  <nav className="navbar navbar-expand-md navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="https://livedemo00.template-help.com/wt_60075_v2/images/logo-light-148x30.png" width="142"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item text-white">
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

  <section id="home" className="d-flex">
    <div className="container align-self-center">
      <div className="row">
        <div className="col-md-12 capa">
          <h1 className="text-white">Desfrute das suas férias do sonho</h1>
          <p className="text-white mb-3 subtitle">Viajar para qualquer canto do mundo, sem andar em círculos.</p>
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

  <section id="servicos">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Melhores Ofertas</h1>
          <p className="top">Selecionamos algumas ofertas</p>
        </div>

        <div className="cards">
          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-01-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Turquiia</h2>
                <p>Istambul,Antalya,Ephesus</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>

          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-02-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Espanha</h2>
                <p>Madrid,Andalucia,Barcelona</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>

          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-03-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Reino Unido</h2>
                <p>Inglaterra,Escocia,Wales</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>

          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-04-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Leste da Europa</h2>
                <p>Eslovênia,Hungria,Polônia</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>

          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-05-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Itália</h2>
                <p>Roma,Milão,Veneza</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>

          <div className="card-trip">
              <img src="https://livedemo00.template-help.com/wt_60075_v2/images/offers/box-offer-06-370x310.jpg"/>
            <div className="card-trip-infos">
              <div>
                <h2>Alpes Suiços</h2>
                <p>Zurich,Geneva,Luzern</p>
              </div>
              <h2 className="card-trip-princing">£99.99</h2>
              <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-white space">Por quê escolher a travel</h1>
        </div>
        <div className="row row-30 row-sm justify-content-sm-center justify-content-lg-start text-sm-left">
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                      <div className="unit flex-column flex-sm-row unit-spacing-sm">
                          <div className="unit-body">
                            <p className="text-small text-black text-uppercase text-ubold">Pesquisa Personalizada</p>
                            <p className="text-small text-silver-chalice">O nosso sistema de pesquisa ajuda-o a encontrar uma visita personalizada em apenas alguns cliques. </p>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                    <div className="unit flex-column flex-sm-row unit-spacing-sm">
                      <div className="unit-body">
                        <p className="text-small text-black text-uppercase text-ubold">Grande Variedade de destinos</p>
                        <p className="text-small text-silver-chalice">Com a Travel, encontrará um destino perfeito entre as centenas disponíveis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                    <div className="unit flex-column flex-sm-row unit-spacing-sm">
                      <div className="unit-body">
                        <p className="text-small text-black text-uppercase text-ubold">Serviço Altamente qualificado</p>
                        <p className="text-small text-silver-chalice">O nosso elevado nível de serviço é oficialmente reconhecido por milhares de clientes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                    <div className="unit flex-column flex-sm-row unit-spacing-sm">
                      <div className="unit-body">
                        <p className="text-small text-black text-uppercase text-ubold">Suporte 24/7</p>
                        <p className="text-small text-silver-chalice">Os nossos agentes de viagens estão sempre presentes para apoiar durante a sua viagem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                    <div className="unit flex-column flex-sm-row unit-spacing-sm">
                      <div className="unit-body">
                        <p className="text-small text-black text-uppercase text-ubold">Hotéis escolhidos a dedo</p>
                        <p className="text-small text-silver-chalice">Escolheremos os hotéis com a máxima reputação e as críticas positivas.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box box-sm bg-default d-block">
                    <div className="unit flex-column flex-sm-row unit-spacing-sm">
                      <div className="unit-body">
                        <p className="text-small text-black text-uppercase text-ubold">Melhor garantia de preço</p>
                        <p className="text-small text-silver-chalice">Garantimos-lhe um conforto de primeira a um preço acessível.</p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img src="https://livedemo00.template-help.com/wt_60075_v2/images/logo-dark-148x30.png" width="142"/>
        </div>
          <div className="col-md-2">
            <h4>Contatos</h4>
            <ul className="style-footer">
              <li><a href="#"></a>Endereço</li>
              <li><a href="#"></a>Telefone</li>
              <li><a href="#"></a>E-mail</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Links Utéis</h4>
              <ul className="style-footer">
                <li><a href="#"></a>Imprensa</li>
                <li><a href="#"></a>Ajuda</li>
                <li><a href="#"></a>Anúncio</li>
              </ul>
          </div>

          <div className="col-md-4">
            <h4>Siga-Nos</h4>
              <ul>
                <li>
                  <a href="#"><i class="fab fa-facebook-square fa-4x"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter-square fa-4x"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin fa-4x"></i></a>
                </li>
              </ul>
          </div>
      </div>
    </div>
  </footer>
  
</div>
  );
}

export default App;
