import React from 'react'

function Register() {
  return (
    <div>
      <div>
        <div className="login">
        <h1>chanzo</h1>
        <h2>Sign Up</h2>
            <div className="form">
                <h4>First Name <br/> <input type="First name" placeholder={"First Name"}/></h4>
                <h4>Last Name <br/><input type="Last name" placeholder={"Last Name"}/></h4>
                <h4>Username <br/> <input type="Username" placeholder={"Username"}/></h4>
                <h4>Password <br/> <input type="password" name="" id="" placeholder={"Password"}/></h4>
                    <p>Already have an account ? <a href="#">Log In</a> </p>
            </div>
                <div className="btn"><button><h3>Log in</h3></button>
                    <button ><h3>Signup</h3></button>
                </div>


        </div>
        </div>
    </div>
  )
}

export default Register
