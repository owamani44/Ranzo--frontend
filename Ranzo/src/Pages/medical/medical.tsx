import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import './medical.scss';
import { myAxios } from "../../api";

function Medical() {
     const [registerForm, setRegisterForm] = useState({
         tagNumber: "",
          eventType: "ILLNESS", 
          symptoms: "",
          recordedBy: ""
         })
       const handleInput = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
             setRegisterForm({...registerForm, [event.target.name]: event.target.value})
       }
       function handleSubmit (event:React.FormEvent<HTMLFormElement>){
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
          type: "MEDICATION", 
          status:"ACTIVE",
          drugName: "",
          dosage:"",
          administeredBy: ""
         })
       const handleInputForMed = (event:React.ChangeEvent<HTMLInputElement| HTMLSelectElement >)=>{
             setMedicalForm({...medicalForm, [event.target.name]: event.target.value})
       }
       function handleSubmitForMed (event:React.FormEvent<HTMLFormElement>){
         event.preventDefault();
         myAxios.post("/medication", medicalForm)
         .then(res=>{
           console.log("Medical form  filled successfully", res.data)
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
                <div className="formGroup">
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
                    <option value="ILLNESS">Illness</option>
                    <option value="VACCINATION">Vaccination</option>
                    <option value="INJURY">Injury</option>
                    <option value="CHECKUP">Checkup</option>

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
                 </div>
               </form>
               
             </div>
             <div className="medication">
                <h3 style={{color:"#3b81ea"}}>Document Medication</h3>
               <form onSubmit={handleSubmitForMed} className="medicationForm">
                <div className="formGroup">
                <label htmlFor="tagNumber">Tag Number</label>
                 <input
                  type="text"
                  value={medicalForm.tagNumber}
                   onChange={handleInputForMed} 
                   name="tagNumber" 
                   placeholder="Tag Number"
                   />

                   <label htmlFor="type">Type of Medication</label>
                 <select
                  value={medicalForm.type}
                  onChange={handleInputForMed}
                  name="type" 
                  >
                    <option value="MEDICATION">MEDICATION</option>
                    <option value="VACCINATION">VACCINATION</option>
                    <option value="PROCEDURE">PROCEDURE</option>
                </select>

                <label htmlFor="status">Status of Medication</label>
                <select
                  value={medicalForm.status}
                  onChange={handleInputForMed}
                  name="status" 
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="COMPLETED">COMPLETED</option>
                  
                </select>
                <label htmlFor="drugName">Drug Name</label>
                <input type="text"
                  onChange={handleInputForMed} 
                  value={medicalForm.drugName}
                  name="drugName" 
                  placeholder="Drug Name"
                  />
                  <label htmlFor="dosage">Dosage</label>
                 <input type="text"
                  onChange={handleInputForMed} 
                  value={medicalForm.dosage}
                  name="dosage" 
                  placeholder="Dosage"
                  />
                  <label htmlFor="administeredBy">Administered By</label>
                 <input 
                 type="text"
                  onChange={handleInputForMed}
                  value={medicalForm.administeredBy}
                   name="administeredBy" 
                   placeholder="Administered By"
                   /> 
                
      
                 <button type="submit" style={{backgroundColor:"#3b81ea"}}>Record</button>
                 </div>
               </form>
             </div>
            </div>
            </div>
  )
}

export default Medical;
