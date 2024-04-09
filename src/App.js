
import './App.css';
import { useEffect } from 'react';
import  {StackQueue}  from './Components/stackqueue';



function App() {

  useEffect(() =>
  {
    document.title = 'Stack & Queue Visualizer';
  })

  return (
   
    <>
     <div>
        <StackQueue/>
     </div>

    </>
      
  );
}

export default App;
