
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, Trash, Check, Title } from './style.js'




function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputChange(event) {
    setInputTask(event.target.value)
  }

  function buttonClick() {
    if(inputTask){
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
   
  }

  function endTask(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)

  }

  function deleteItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }



  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => endTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <Title>Não há tarefas na lista</Title>
            )
          }

        </ul>
      </ToDoList>
    </Container>

  )
}

export default App  
