
import { v4 as uuid } from 'uuid';

function App() {
  const list = [
    {id:uuid(), task: "Treinar na academia"},
    {id:uuid(), task: "Estudar na DevClub"}
]

    function inputChange(event) {
      console.log(event.target.value)
    }

    function buttonClick(){
      console.log("Cliquei no botão")
    }



  return (
    <div>
      <input onChange={inputChange} placeholder="O que tenho que fazer..." />
      <button onClick={buttonClick}>Adicionar</button>

      <ul>
        {
          list.map( item =>(
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>

    </div>

  )
}

export default App
