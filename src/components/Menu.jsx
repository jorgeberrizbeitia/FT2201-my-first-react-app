// asi se manejan imagenes y archivos estaticos correctamente en React
import arepaImg from "../images/arepa.jpg";
import pabellonImg from "../images/pabellon.jpg"
import tortaImg from "../images/torta.jpg"

import FoodCard from "../components/FoodCard"


function Menu() {

  const menuStyles = {
    color: "gray",
    padding: "50px",
    // .todos los atributos de JSX son en camelcase
    backgroundColor: "brown",
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div style={menuStyles}>

    {/* <div className="card">
      <p>Arepa con Queso</p>
      <img width="200px" src={arepaImg} alt="arepa" />
    </div> */}

    <FoodCard text="Arepa con Queso" img={arepaImg} />
    <FoodCard text="Pabellon Criollo" img={pabellonImg} />
    <FoodCard text="Torta Tres Leches" img={tortaImg} />



    {/* <div className="card">
      <p>Pabellon Criollo</p>
      <img width="200px" src={pabellonImg} alt="pabellon" />
    </div>

    <div className="card">
      <p>Torta Tres Leches</p>
      <img width="200px" src={tortaImg} alt="torta" />
    </div> */}


  </div>
  )

}

export default Menu;