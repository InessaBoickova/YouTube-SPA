import './App.sass'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../Login/login";
import Navigation from '../Navigation/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path='/YouTube-SPA/' element={<Login/>}/>
              <Route path ='/YouTube-SPA/Navigation' element={ <Navigation/>}/>             
          </Routes>
      </Router>
    </div>
  );
}

export default App;
