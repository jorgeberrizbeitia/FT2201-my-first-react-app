
// asi se manejan imagenes y archivos estaticos correctamente en React
import arepaImg from "../images/arepa.jpg";
import pabellonImg from "../images/pabellon.jpg"
import tortaImg from "../images/torta.jpg"

function Restaurant() {

    // cualquier codigo de JS que queramos

    const menuStyles = {
      color: "gray",
      padding: "50px",
      // .todos los atributos de JSX son en camelcase
      backgroundColor: "brown",
      display: "flex",
      flexDirection: "column"
    }

  return (
    <div>
      <div id="title">
        <h1>Bienvenidos a mi Restaurante</h1>
        <p>La mejor comida venezolana</p>
      </div>

      <div style={menuStyles}>

        <div className="card">
          <p>Arepa con Queso</p>
          <img width="200px" src={arepaImg} alt="arepa" />
        </div>

        <div className="card">
          <p>Pabello Criollo</p>
          <img width="200px" src={pabellonImg} alt="pabellon" />
        </div>

        <div className="card">
          <p>Torta Tres Leches</p>
          <img width="200px" src={tortaImg} alt="torta" />
        </div>


      </div>
    </div>
  )

}

// la forma de exportar modulos o componentes en React
export default Restaurant