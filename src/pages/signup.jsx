import React, { useState } from 'react';
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./css/signup.css"
import Logo from "./css/logo.png"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore, 'users', user.uid), {
                name,
                email,
                course
            });
            navigate('/main');
        } catch (error) {
            setError(error.message);
        }
    };

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
                <p className='so'>Registration Form</p>
                </div>
                

                <form className="form" onSubmit={handleSignUp}>
                    <div className="form-group">

                        <input type="text" id="email" name="email" placeholder="Enter your Name" value={name}
                            onChange={(e) => setName(e.target.value)} required="" />
                    </div>
                    <div className="form-group">

                        <input type="text" id="email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required="" />
                    </div>
                    <div className="form-group">

                        <input type="password" id="email" value={password}
                            onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password" required="" />
                    </div>
                    <div className="form-group">

                        <input type="text" id="course" value={course}
                            onChange={(e) => setCourse(e.target.value)} name="course" placeholder="Enter your Course" required="" />
                    </div>

                    <button className="form-submit-btn" type="submit">Register</button>
                </form>

                <p className="signup-link">
                    Have an account?
                    <a href="#" className="signup-link link">Login</a>
                </p>
            </div>























            {error && <p>{error}</p>}
        </div>
    );
};

export default SignUp;
