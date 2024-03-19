import {useState} from 'react'
import './App.css';
function App()
{
  const [value,setvalue] = useState('');
  return (
    <div className="App">
      <h1>hello {value} </h1>
      <button onClick={() =>msg()}>Click Me</button>
    </div>
  );
  function msg()
  {
    setvalue('harshvardhan');
  }
}
export default App;