import '../../../styles/Home.module.css'
import { useState } from "react";
import axios from "axios"
import {useRouter} from 'next/router'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    const [required, setrequiredError] = useState('')
    
    
    
    const LoginEmail = (event) => {
        const email = event.target.value;
        if(email.includes('@')) {
            setEmailError ("");
        } else {
            setEmailError("Please enter valid email address")
        }
        setEmail(email);
    }
    
    const LoginPassword = (event) => {
        const password = event.target.value;
        if(password.length < 8) {
            setPasswordError("Password must be more than 8 characters")
        } else {
            setPasswordError("");
        }
        setPassword(password);
    }
    
    const LoginUser = async (email, password) => {
        event.preventDefault();
        if( email === "" ||
        password === "" ) {
            setrequiredError("Please enter all input")
        } else { 
            console.log(email,password)
            const res = await axios.post("https://quizapp-0hs0.onrender.com/login",{email:email, password:password})
            console.log("responseeeee =====>",res)
            if(res.status === 200){
                localStorage.setItem("user", true);
                localStorage.setItem('userId', res.data)
                router.push("/")
            }
        } 
    }
    
    return (
        <div className="wrapper">
        <form action="">
        <h1>Login</h1>
        
        <div className="input-box">
        <input placeholder="email" value={email} onChange={LoginEmail}/>
        {/* <div style={{color: "red"}}>{emailError}</div> */}
        </div>
        
        <div className="input-box">
        <input placeholder="password" value={password} onChange={LoginPassword}/>
        {/* <div style={{color: "red"}}>{passwordError}</div> */}
        </div>
        
        
        <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me </label>
        <a href="#">Forgot password?</a>
        </div>
        <button className="btn" onClick={() => LoginUser(email, password)}>login</button>
        {/* <div style={{color: "red"}}>{required}</div> */}
        <div className="register-link">
        <p>Don't have an account? <a href="/sign-up">Sign up</a></p>
        </div>
        </form>
        </div>
        )
        
    }
    export default Login