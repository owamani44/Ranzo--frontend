import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import './medical.scss'
import { myAxios } from "../../api"

function medical() {
     const [registerForm, setRegisterForm] = useState({
         tagNumber: "",
         species: "", 
         breed: "",
         gender:"",
         birthDate: "",
         kraalAssignment: "",
         })
       const handleInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
             setRegisterForm({...registerForm, [event.target.name]: event.target.value})
       }
       function handleSubmit (event:React.ChangeEvent<HTMLFormElement>){
         event.preventDefault();
         myAxios.post("/animals", registerForm)
         .then(res=>{
           console.log("Animal registered successfully", res.data)
         })
         .catch(err=>{
           console.error("Error registering animal", err)
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
                 <input type="text" onChange={handleInput} name="tagNumber" placeholder="Tag Number"/>
                 <input type="text" onChange={handleInput} name="species" placeholder="Species"/>
                 <input type="text" onChange={handleInput} name="breed" placeholder="Breed"/>
                 <input type="text" onChange={handleInput} name="gender" placeholder="Gender"/>
                 <input type="date" onChange={handleInput} name="birthDate" placeholder="Birth Date "/>
                 <input type="text" onChange={handleInput} name="kraalAssignment" placeholder="Kraal Assignment"/>
                 <button>Register Animal</button>
               </form>
               
             </div>
            </div>
            </div>
  )
}

export default medical;
