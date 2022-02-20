import './App.css';
import {useState} from 'react'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      {isLoggedIn ?
        <MainPage setIsLoggedIn={setIsLoggedIn}/>
      :
       <LoginPage setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
