import "./Login.scss"
import logo from '../../assets/ranzo-cropped.png';
import { Link } from "react-router";
import { useState } from "react";
import { myAxios } from "../../api";

function Login() {
  const currentYear = new Date().getFullYear();
  const [registerForm, setRegisterForm] = useState({
                userName: "",
                password: "" 
               })
             const handleInput = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
                   setRegisterForm({...registerForm, [event.target.name]: event.target.value})
             }
             function handleSubmit (event:React.ChangeEvent<HTMLFormElement>){
               event.preventDefault();
               myAxios.post("/login", registerForm)
               .then(res=>{
                 console.log("Registration successfull", res.data)
               })
               .catch(err=>{
                 console.error("Error registering", err) 
               })
             }
  return (
    <div className="login">
      
        <div className="centre">
        <form onSubmit={handleSubmit} className="loginForm">
            <div className="logoContainer">
              <img src={logo} alt="Ranzo Logo" />
            </div>
            
          <h4>
            Username 
            <br/> 
            <input 
            type="text"
            onChange={handleInput}
            value={registerForm.userName}
             placeholder={"Username"}/>
             </h4>
          <h4>
            Password 
            <br/> 
            <input 
            type="password" 
            name="" id="" 
            onChange={handleInput}
            value={registerForm.password}
            placeholder={"Password"}/>
            </h4>  
          <button>Log in</button>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
      <div className="footer">
        <p>Copyright © {currentYear} Ranzo. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Login
