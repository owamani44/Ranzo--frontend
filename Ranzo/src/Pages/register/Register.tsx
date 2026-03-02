import "./register.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo  from '../../assets/ranzo-cropped.png';
import { myAxios } from "../../api";

const Register = () => {
    const currentYear = new Date().getFullYear();
    const [registerForm, setRegisterForm] = useState({
             firstName: "",
              lastName: "", 
              role: "",
              password: "" 
             })
           const handleInput = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
                 setRegisterForm({...registerForm, [event.target.name]: event.target.value})
           }
           function handleSubmit (event:React.ChangeEvent<HTMLFormElement>){
             event.preventDefault();
             myAxios.post("/register", registerForm)
             .then(res=>{
               console.log("Registration successfull", res.data)
             })
             .catch(err=>{
               console.error("Error registering", err) 
             })
           }
  return (
    <div className="register">
        <div className="centre">
        <form  onSubmit={handleSubmit} className="registerForm">
            <div className="logoContainer">
              <img src={logo} alt="Ranzo Logo" />
            </div>
            
          <h4>First Name
             <br/> 
             <input
              type="text"
               onChange={handleInput} 
               value={registerForm.firstName} 
               placeholder={"First Name"}/>
            </h4>
            <h4>Last Name
             <br/> 
             <input
              type="text"
               onChange={handleInput} 
               value={registerForm.lastName} 
               placeholder={"Last Name"}/>
            </h4>
            <h4>Role
             <br/> 
             <select
                value={registerForm.role}
               onChange={handleInput} 
               name="Role" 
               >
                    <option value="">MANAGER</option>
                    <option value="">VET</option>
                    <option value="">RANCH OPERATOR</option>
                </select>
            </h4>
          <h4>Password 
            <br/> 
            <input type="password"
             value={registerForm.password}
             onChange={handleInput}  
             placeholder={"Password"}/>
             </h4> 
          <button>Register</button>
          <p>Already have an account? <Link to="/">Log in</Link></p>
        </form>
      </div>
      <div className="footer">
        <p>Copyright © {currentYear} Ranzo. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Register
