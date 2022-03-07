

function Details(props) {

  console.log(props)

  return (
    <div>
      <p>Name: {props.ta.name}</p>
      <p>Speciality: {props.ta.speciality}</p>
  </div>
  )

}

export default Details;