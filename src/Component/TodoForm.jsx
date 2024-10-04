import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Redux/action';
import { Button, ButtonGroup } from '@chakra-ui/react'
import styled from 'styled-components';


const TodoForm = () => {

    const [task,setTask]=useState("")
    const dispatch=useDispatch()

    const handlesubmit=(e)=>{
         e.preventDefault()

        dispatch(addtask(task))
        console.log(task,"handlesubmit todoform")
        setTask("")
     
    }

  return (
    <DIV>
      <form className='TodoForm' onSubmit={handlesubmit} action="">

       <input id='task' type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter Your Task' />

       <Button  colorScheme='blue' 
        size='lg' 
        width={{ base: "100%", md: "20%" }}
        type='submit'
        marginLeft="5px"
        
         >ADD</Button>

      </form>
      

    </DIV>
  )
}

export default TodoForm

const DIV=styled.div`

  width: 100%;
  margin-bottom: 50px;
  form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


  #task{
    flex: 1 1 70%;
   width: 80%;
  padding: 12px;
  font-size: 16px;
  
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  
  }


  @media (max-width: 768px) {
    #task {
      flex: 1 1 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }
  }

`
