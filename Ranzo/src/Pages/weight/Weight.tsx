import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import './Weight.scss'
import { myAxios } from "../../api"
import Chart from '../../Components/chart/Chart';

function Weight() {
  const[successMessage, setSuccessMessage]=useState();
  const [registerForm, setRegisterForm] = useState({
           tagNumber: "", 
            weight: ""
           })
         const handleInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
               setRegisterForm({...registerForm, [event.target.name]: event.target.value})
         }
         function handleSubmit (event:React.FormEvent<HTMLFormElement>){
           event.preventDefault();
           myAxios.post("/weight", registerForm)
           .then(res=>{
             console.log("Weight recorded successfully", res.data)
             setSuccessMessage("Weight Record Successfull")
           })
           .catch(err=>{
             console.error("Error recording weight", err)
           })
         }
         return (
           <div className="weight">
             <div className="sideBar">
               <Sidebar/>
               </div>
           
             <div className="container">
               <Navbar/>
               <div className="addAnimal">
                 <h3>Record Weight</h3>
                 <form onSubmit={handleSubmit} className="form">
                   <input 
                    type="text"
                    onChange={handleInput}
                    name="tagNumber"
                    value={registerForm.tagNumber}
                    placeholder="Tag Number"
                    />
                   <input
                    type="text"
                    onChange={handleInput}
                    name="weight" 
                    value={registerForm.weight}
                    placeholder="Weight in Kgs"
                    />
                   {successMessage && (
                      <p className="success">{successMessage}</p>
                    )}
                   <button type="submit">Record Weight</button>
                 </form>
                </div>
                <div className="contentContainer">
                         <Chart/>
                </div>
              </div>
                
                   
               
        </div>
              
    )
  }

export default Weight
