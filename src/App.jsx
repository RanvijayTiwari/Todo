

 import styled from 'styled-components';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import { Heading } from '@chakra-ui/react'

function App() {
  return (
    
    <DIV className="App">

   <Heading
        as="h1"
        textAlign="center"
        marginBottom="20px"
      > Todo App  </Heading>


      <TodoForm/>
      <TodoList/>
    </DIV>

      
  );
}


export default App;

const DIV=styled.div`
 
  width: 80%;
  margin: 100px 280px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95%; 
    margin: 20px; 
  }

  
  `



