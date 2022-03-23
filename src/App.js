import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { TOdo } from './Components/todo';
import { Login } from './Components/Login';
import { useSelector } from 'react-redux';

function App() {

  const {status}= useSelector((store)=>store.state.state);
  console.log(status);
  return (
    <div className="App">
     
     {status? <TOdo/> : <Login/> }
     
      
    
    


{/* <Counter/> */}
    </div>
  );
}

export default App;
