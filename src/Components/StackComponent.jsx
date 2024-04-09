import React, { useState } from 'react'
import './stack.css';
import  {Button}  from 'react-bootstrap';

export const StackComponent = () => {

  const [stack,setStack] = useState([]);
 

  const Push  = () =>
  {
    setStack(st => [...st, st.push(st.length+1)]);
  }


  const Pop = () =>
  {
   setStack((st) => st.slice(0,-1));
  }

  const disablePush = stack.length === 20 ? true : false;
  const disablePop = stack.length === 0 ? true : false;

  return (
    <>
    <h3 style={{textAlign:"center", margin:"10px"}}>Stack Operations</h3>
    <div className='stack-container'>
      
      <div className="push-pop">
        <Button  disabled={disablePush} onClick={() => Push()} className='btn btn-primary'>Push</Button>
        <Button  disabled={disablePop} onClick={() => Pop()} className='btn btn-danger'>Pop</Button>
      </div>
      <div className="output">
        <div className="stack-box">
         
         {stack.slice().reverse().map((item) => 
         
         <div className='stack-items'>{item}</div>
        )}
         
        
        </div>
      </div>
    </div>
        </>
  )
}
