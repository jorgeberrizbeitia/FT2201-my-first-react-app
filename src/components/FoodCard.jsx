
function FoodCard(props) {

  console.log("props", props)

  return (
    <div className="card">
      <p>{props.text}</p>
      <img width="200px" src={props.img} alt={"Arepa con Queso"} />
    </div>
  )

}

export default FoodCard