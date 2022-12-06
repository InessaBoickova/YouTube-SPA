import './App.sass'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from '../../hoc/PrivateRoute';
import Login from "../Login/login";
import YoutubePage from '../YoutubePage/youtubePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path='/YouTube-SPA/' element={<Login/>}/>
              <Route path ='/YouTube-SPA/VideoSearch' element={ 
                          <PrivateRoute>
                                <YoutubePage/>
                          </PrivateRoute>
              }/>             
          </Routes>
      </Router>
    </div>
  );
}

export default App;
