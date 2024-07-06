import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link  } from 'react-router-dom';
import Logo from "./css/logo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (error) {
      setError(error.message);
    }
  };

  const nav=()=>{
    navigate('/signup')
  }

  return (
    <div className='centerdiv'>

      <div className="form-container">
        <div className="logo-container">

          <div className="bgimg">
            <img src={Logo} alt="" height="40px" />

          </div>
          Jesus Youth KE College


          <p className='titleh'>JAM</p>
          <p>JESUS AND ME</p>
          <br></br>
          <p className='so'></p>
        </div>


        <form className="form" onSubmit={handleLogin}>

          <div className="form-group">

            <input type="text" id="email" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required="" />
          </div>
          <div className="form-group">

            <input type="password" id="email" alue={password}
          onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password" required="" />
          </div>
    

          <button className="form-submit-btn" type="submit">Login</button>
        </form>
        <Link to="/signup">
        <p className="signup-link">
          Don't Have an account?
          SignUp.
          
        </p>
        </Link>
      </div>









     
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
