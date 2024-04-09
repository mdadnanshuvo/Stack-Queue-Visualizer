import React from 'react';
import './style.css';
import { useState } from 'react';
import { StackComponent } from './StackComponent';
import { QueueComponent } from './QueueComponent';


export const StackQueue = () => {

const [activeMode, setActiveMode] = useState("STACK");

const stackActivation = activeMode === "STACK" ? true : false;
const queueActivation = activeMode === "QUEUE" ? true : false;

console.log(activeMode);

  return (
    <div className='container'>
        
       <h2>Please Select Mode</h2>
        <div className="stackqueue-container" >
       <button className='stack-button'   onClick={() => setActiveMode("STACK")}>Stack</button>
       <button  className='queue-button' onClick={() => setActiveMode("QUEUE")}>Queue</button>
    
        </div>

        <div className="stack-queue-operations">
            {activeMode === "STACK" ? <StackComponent/> : <QueueComponent/>}
        </div>

        </div>
  )
}
