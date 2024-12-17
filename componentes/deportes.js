import './App.css';
import deporte4 from './imagenes/deporte4.jpg';
import deporte5 from './imagenes/deporte5.jpg';

function deportes() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>Deportes favoritos</h2>
          <div className="contenedor-padre">
           <div className="hijo">
            <p>Futból</p>
             <img src={"./public/deporte2"} className="App-logo" alt="logo" />
           </div>
           <div className="hijo">
            <p>League of Legends</p>
             <img src={"./public/deporte3"} className="App-logo" alt="logo" />
           </div>
           <div className="hijo">
            <p>Tae kwon do</p>
            <img src={deporte4} className="App-logo" alt="logo" />
           </div>
           <div className="hijo">
            <p>Tae kwon do</p>
            <img src={deporte5} className="App-logo" alt="logo" />
           </div>
          </div>
  
        </header>
      </div>
    );
  }
  
  export default deportes;