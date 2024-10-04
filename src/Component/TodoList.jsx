import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Table,
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
import { deletetask, toggletask } from '../Redux/action'

const TodoList = () => {

    const task_data=useSelector((state)=>state.task)
    const dispatch=useDispatch()

  return (
    <div>
      
      <TableContainer width="100%">
  <Table variant='striped' colorScheme='teal'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr>
        <Th>Task</Th>
        <Th>Status</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>

        {task_data.map((el)=>(<Tr key={el.id}>
        <Td>{el.task}</Td>
        <Td> 
        <input 
                type="checkbox" 
                checked={el.completed} 
                onChange={() => dispatch(toggletask(el.id))} 
              />
        </Td>
        <Td> 
        <Button  onClick={()=>dispatch(deletetask(el.id))} colorScheme='red' size={{ base: "sm", md: "md" }}>Delete</Button>
        </Td>
      </Tr>))}
      
     
    </Tbody>
    
  </Table>
</TableContainer>

    </div>
  )
}

export default TodoList

