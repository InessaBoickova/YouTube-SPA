import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Service = () =>{
  const navigate = useNavigate();
  const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

  const onLogin = (login ,password) =>{
      axios.post('http://localhost:3000/users', {
            login,
            password,
            token
      })
      .then(function (response) {
          localStorage.setItem('token', token);
          navigate('/YouTube-SPA/VideoSearch');
      })
      .catch(function (error) {
        alert ('Что-то пошло не так , попробуйте снова');
        console.log(error);
      });
  }
  return {onLogin};
}

export default Service;

