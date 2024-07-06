import React, { useState } from 'react';
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate,Link } from 'react-router-dom';
import "./css/signup.css"
import Logo from "./css/logo.png"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [number, setnumber] = useState();
    const [date, setdate] = useState();
    const [addr, setaddr] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore, 'users', user.uid), {
                name,
                email,
                course,
                number,
                date,
                addr
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

                        <input type="text" id="name" name="name" placeholder="Enter your Name" value={name}
                            onChange={(e) => setName(e.target.value)} required="" />
                    </div>
                    <div className="form-group">

                        <input type="number" id="number" name="number" value={number}
                            onChange={(e) => setnumber(e.target.value)} placeholder="whatspp/phno" required="" />
                    </div>Date of birth
                    <div className="form-group">

                        <input type="date" id="number" name="number" value={date} 
                         onChange={(e) => setdate(e.target.value)} placeholder="Date of birth" required="" />
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
                            onChange={(e) => setCourse(e.target.value)} name="course" placeholder="Enter your Department" required="" />
                    </div>
                    <div className="form-group">

                        <input type="text" id="addr" name="addr" value={addr}
                            onChange={(e) => setaddr(e.target.value)} placeholder="Address" required="" />
                    </div>

                    <button className="form-submit-btn" type="submit">Register</button>
                </form>
                <Link to="/login">
                <p className="signup-link">
                    Have an account?
                    Login
                </p>
                </Link>
               
            </div>























            {error && <p>{error}</p>}
        </div>
    );
};

export default SignUp;
