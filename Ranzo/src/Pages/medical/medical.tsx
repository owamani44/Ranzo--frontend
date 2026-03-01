import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import './medical.scss'
import { myAxios } from "../../api"

function medical() {
     const [registerForm, setRegisterForm] = useState({
         tagNumber: "",
          eventType: "", 
          symptoms: "",
          recordedBy: ""
         })
       const handleInput = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
             setRegisterForm({...registerForm, [event.target.name]: event.target.value})
       }
       function handleSubmit (event:React.ChangeEvent<HTMLFormElement>){
         event.preventDefault();
         myAxios.post("/health-events", registerForm)
         .then(res=>{
           console.log("Sickness report filed successfully", res.data)
         })
         .catch(err=>{
           console.error("Error filing sickness report", err) 
         })
       }
       return (
         <div className="medical">
           <div className="sideBar">
             <Sidebar/>
             </div>
         
           <div className="container">
             <Navbar/>
             <div className="addAnimal">
               <h3>Report Sick Animal</h3>
               <form onSubmit={handleSubmit} className="animalForm">
                 <input
                  type="text"
                  value={registerForm.tagNumber}
                   onChange={handleInput} 
                   name="tagNumber" 
                   placeholder="Tag Number"
                   />
                 <select
                  value={registerForm.eventType}
                  onChange={handleInput}
                  name="eventType" 
                  >
                    <option value="">Illness</option>
                    <option value="Sickness">Vaccination</option>
                    <option value="Injury">Injury</option>
                    <option value="Other">Checkup</option>

                </select>
                 <input type="text"
                  onChange={handleInput} 
                  value={registerForm.symptoms}
                  name="symptoms" 
                  placeholder="Symptoms"
                  />
                 <input 
                 type="text"
                  onChange={handleInput}
                  value={registerForm.recordedBy}
                   name="recordedBy" 
                   placeholder="Recorded By"
                   /> 
                
      
                 <button type="submit">Register Animal</button>
               </form>
               
             </div>
            </div>
            </div>
  )
}

export default medical;
