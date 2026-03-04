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
       const [medicalForm, setMedicalForm] = useState({
         tagNumber: "",
          type: "", 
          status:"",
          drugName: "",
          dosage:"",
          administeredBy: ""
         })
       const handleInputForMed = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
             setMedicalForm({...medicalForm, [event.target.name]: event.target.value})
       }
       function handleSubmitForMed (event:React.ChangeEvent<HTMLFormElement>){
         event.preventDefault();
         myAxios.post("/medication", registerForm)
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
                <label htmlFor="tagNumber">Tag Number</label>
                 <input
                  type="text"
                  value={registerForm.tagNumber}
                   onChange={handleInput} 
                   name="tagNumber" 
                   placeholder="Tag Number"
                   />
                   <label htmlFor="eventType">Alert Type</label>
                 <select
                  value={registerForm.eventType}
                  onChange={handleInput}
                  name="eventType" 
                  >
                    <option value="Illness">Illness</option>
                    <option value="Vaccination">Vaccination</option>
                    <option value="Injury">Injury</option>
                    <option value="Checkup">Checkup</option>

                </select>
                <label htmlFor="symptoms">Symptoms</label>
                 <input type="text"
                  onChange={handleInput} 
                  value={registerForm.symptoms}
                  name="symptoms" 
                  placeholder="Symptoms"
                  />
                  <label htmlFor="recordedBy">Recorded By</label>
                 <input 
                 type="text"
                  onChange={handleInput}
                  value={registerForm.recordedBy}
                   name="recordedBy" 
                   placeholder="Recorded By"
                   /> 
                
      
                 <button type="submit">Report</button>
               </form>
               
             </div>
             <div className="medication">
                <h3 style={{color:"#3b81ea"}}>Document Medication</h3>
               <form onSubmit={handleSubmitForMed} className="medicationForm">
                 <input
                  type="text"
                  value={medicalForm.tagNumber}
                   onChange={handleInputForMed} 
                   name="tagNumber" 
                   placeholder="Tag Number"
                   />
                 <select
                  value={medicalForm.type}
                  onChange={handleInputForMed}
                  name="type" 
                  >
                    <option value="MEDICATION">MEDICATION</option>
                    <option value="VACCINATION">VACCINATION</option>
                    <option value="PROCEDURE">PROCEDURE</option>
                    

                </select>
                <select
                  value={medicalForm.status}
                  onChange={handleInputForMed}
                  name="eventType" 
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="COMPLETED">COMPLETED</option>
                  
                </select>
                <input type="text"
                  onChange={handleInputForMed} 
                  value={medicalForm.drugName}
                  name="drugName" 
                  placeholder="Drug Name"
                  />
                 <input type="text"
                  onChange={handleInputForMed} 
                  value={medicalForm.dosage}
                  name="dosage" 
                  placeholder="Dosage"
                  />
                 <input 
                 type="text"
                  onChange={handleInputForMed}
                  value={medicalForm.administeredBy}
                   name="administeredBy" 
                   placeholder="Administered By"
                   /> 
                
      
                 <button type="submit" style={{backgroundColor:"#3b81ea"}}>Record</button>
               </form>
             </div>
            </div>
            </div>
  )
}

export default medical;
