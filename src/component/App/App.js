import './App.sass'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../Login/login";
import VideoSearch from '../VideoSearch/videoSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path='/YouTube-SPA/' element={<Login/>}/>
              <Route path ='/YouTube-SPA/VideoSearch' element={ <VideoSearch/>}/>             
          </Routes>
      </Router>
    </div>
  );
}

export default App;
