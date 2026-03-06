import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import './Weight.scss'
import { myAxios } from "../../api"
import Chart from '../../Components/chart/Chart';

function Weight() {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [registerForm, setRegisterForm] = useState({
           tagNumber: "", 
            weight: ""
           })
         const handleInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
               if (successMessage) setSuccessMessage("");
               if (submitError) setSubmitError("");
               setRegisterForm({...registerForm, [event.target.name]: event.target.value})
         }
         function handleSubmit (event:React.FormEvent<HTMLFormElement>){
           event.preventDefault();
           const payload = {
             tagNumber: registerForm.tagNumber.trim(),
             weight: Number(registerForm.weight)
           };
           if (!payload.tagNumber || Number.isNaN(payload.weight)) {
             setSubmitError("Please provide a valid tag number and weight.");
             return;
           }
           myAxios.post("/weight", payload)
           .then(res=>{
             console.log("Weight recorded successfully", res.data)
             setSuccessMessage("Weight Record Successfull")
           })
           .catch(err=>{
             setSubmitError("Failed to record weight.");
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
                 {successMessage && (
                      <p className="success">{successMessage}</p>
                    )}
                   {submitError && (
                     <p style={{ color: "red", margin: 0 }}>{submitError}</p>
                   )}
                 <form onSubmit={handleSubmit} className="form">
                   <input 
                    type="text"
                    onChange={handleInput}
                    name="tagNumber"
                    value={registerForm.tagNumber}
                    placeholder="Tag Number"
                    />
                   <input
                    type="number"
                    onChange={handleInput}
                    name="weight" 
                    value={registerForm.weight}
                    min="1"
                    step="0.1"
                    placeholder="Weight in Kgs"
                    />
                   
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
