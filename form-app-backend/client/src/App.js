import './App.css';
import Login from './components/Login'; // <-- imports

function App() { // <-- main component
  return (
    <div className="App">
      <Login/> 
    </div>
  );
}

export default App; // <-- so index.js can get access
