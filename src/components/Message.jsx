

function Message(props) {

  console.log(props)
  const mensajeRepeat = props.children.repeat(props.num)

  return (
    <div>
      <h3>El mensaje es:</h3>
      {mensajeRepeat}
    </div>
  )

}

export default Message;