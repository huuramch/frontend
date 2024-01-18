import { useState } from "react";
import axios from "axios"
import {useRouter} from 'next/router'

const signUp = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    
    const [age, setAge] = useState('')
    const [ageError, setAgeError] = useState('')
    
    const [required, setrequiredError] = useState('')
    
    const handleChangeUserName = (event) => {
        const username = event.target.value;
        if(username.length <= 4){
            setUsernameError("Username must be more than 4 characters");
        } else {
            setUsernameError("");
        }
        setUsername(username);
    };
    const handleChangeEmail = (event) => {
        const email = event.target.value;
        if(email.includes('@')) {
            setEmailError ("");
        } else {
            setEmailError("Please enter valid email address")
        }
        setEmail(email);
    }
    const handleChangePassword = (event) => {
        const password = event.target.value;
        if(password.length < 8) {
            setPasswordError("Password must be more than 8 characters")
        } else {
            setPasswordError("");
        }
        setPassword(password);
    }
    
    const handleChangeConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
    }
    
    const handleChangeAge = (event) => {
        const age = event.target.value;
        if(age < 18){
            setAgeError("Comeback when you turn 18")
        } else{
            setAgeError("")
        }
        setAge(age);
    }
    
    const createUser = async () => {
        if(username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" || 
        age === "" ) {
            setrequiredError("Please enter all input")
        } else if(confirmPassword !== password){
            setConfirmPasswordError("Confirm password must match with password")
        } else{
            await axios.post("https://quizapp-0hs0.onrender.com/signup", {userName:username, age:age, email:email, password:password }).then((response) => {
            console.log(response);
            alert("Amjilttai uusgegdlee");
            router.push("/login")
        })
        .catch((error) => {
            setrequiredError("Email address is already used")
        })
    } 
}
return (
    <div className="wrapper">
        <form action="">
    <h1>Sign up</h1>
    <div className="input-box">
    <input placeholder="username" value={username} onChange={handleChangeUserName}></input>
    <div style={{color: "red"}}>{usernameError}</div>
    </div>

    <div className="input-box">
    <input placeholder="email" value={email} onChange={handleChangeEmail}></input>
    <div style={{color: "red"}}>{emailError}</div>
    </div>

    <div className="input-box">
    <input placeholder="password" value={password} onChange={handleChangePassword}></input>
    <div style={{color: "red"}}>{passwordError}</div>
    </div>

    <div className="input-box">
    <input placeholder="Confirmpassword" value={confirmPassword} onChange={handleChangeConfirmPassword} type="password"></input>
    <div style={{color: "red"}}>{confirmPasswordError}</div>
    </div>

    <div className="input-box">
    <input placeholder="age" value={age} onChange={handleChangeAge}></input>
    <div style={{color: "red"}}>{ageError}</div>
    </div>

    <button className="btn" onClick={() => createUser(email, password)}>create</button>
    <div style={{color: "red"}}>{required}</div>
    </form>
    </div>
    )
}
export default signUp