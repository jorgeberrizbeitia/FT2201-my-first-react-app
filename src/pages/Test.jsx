import Details from "../components/Details";
import Message from "../components/Message";
import ReactPlayer from 'react-player'

function Test() {

  const ta1 = {
    name: "Aaron",
    speciality: "Frontend"
  }

  const ta2 = {
    name: "Caro",
    speciality: "Backend"
  }

  console.log(ta1.name)



  // lo ultimo del componente siempre será el return del jsx
  return (
    <div>

      <h1>Test</h1>

      {/* <Details name={ta1.name} speciality={ta1.speciality}/> */}
      <Details ta={ta1}/>
      <Details ta={ta2}/>

      <Message num={4}>
        Mensaje dentro del componente
      </Message>

      <Message num={7}>
        Hola
      </Message>

      <ReactPlayer 
        url='https://youtu.be/dQw4w9WgXcQ' 
        controls={true} 
        volume={0.2}
      />


    </div>
  )

}

export default Test;