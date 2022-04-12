import logo from './logo.svg';
import './App.css';
import ReactNotes from './ReactNotes';
import Login from './Conditional/Login';


function App() {
  return (
    <div className="App">
     {/* <ReactNotes/> */}
     <Login loggedIn = {true} />
    </div>
  );
}

export default App;
