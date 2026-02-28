import "./Login.scss"
import logo from '../../assets/ranzo-cropped.png';
import { Link } from "react-router";

function Login() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="login">
      
        <div className="centre">
        <form action="" className="loginForm">
            <div className="logoContainer">
              <img src={logo} alt="Ranzo Logo" />
            </div>
            
          <h4>Username <br/> <input type="text" placeholder={"Username"}/></h4>
          <h4>Password <br/> <input type="password" name="" id="" placeholder={"Password"}/></h4> 
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
