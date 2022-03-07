
function FoodCard(props) {

  console.log("props", props)
  const { text, img } = props

  return (
    <div className="card">
      <p>{text}</p>
      <img width="200px" src={img} alt={text} />
    </div>
  )

}

export default FoodCard