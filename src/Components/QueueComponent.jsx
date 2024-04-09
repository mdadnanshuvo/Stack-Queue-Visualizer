import React, { useState } from 'react'
import './queue.css';
import  {Button}  from 'react-bootstrap';

export const QueueComponent = () => {
  const [queue,setQueue] = useState([]);
 

  const Enqueue  = () =>
  {
    setQueue(st => [...st, st.push(st.length+1)]);
  }


  const Dequeue = () =>
  {
   setQueue((st) => st.slice(0,-1));
  }

  const disableEnqueue = queue.length === 20 ? true : false;
  const disableDequeue = queue.length === 0 ? true : false;

  return (
    <>

    <div className='queue-container'>
      <h3>Queue Operations</h3>
      <div className="enqueue-dequeue">
        <Button disabled={disableEnqueue} onClick={() => Enqueue()} className='btn btn-primary'>Enqueue</Button>
        <Button disabled={disableDequeue} onClick={() => Dequeue()} className='btn btn-danger'>Dequeue</Button>
      </div>
      <div className="output">
        <div className="queue-box">
         
         {queue.map((item) => 
         
         <div className='queue-items'>{item}</div>
        )}
         
        
        </div>
      </div>
    </div>
        </>
  )

         }