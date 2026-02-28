import React, { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import './Weight.scss'
import { myAxios } from "../../api"
import Chart from '../../Components/chart/Chart';

function Weight() {
  const [registerForm, setRegisterForm] = useState({
           tagNumber: "", 
            weight: ""
           })
         const handleInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
               setRegisterForm({...registerForm, [event.target.name]: event.target.value})
         }
         function handleSubmit (event:React.ChangeEvent<HTMLFormElement>){
           event.preventDefault();
           myAxios.post("/weight", registerForm)
           .then(res=>{
             console.log("Weight recorded successfully", res.data)
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
                   <input type="text" onChange={handleInput} name="tagNumber" placeholder="Tag Number"/>
                   <input type="text" onChange={handleInput} name="weight" placeholder="Weight in Kgs"/>
                   
                   <button>Record Weight</button>
                 </form>
                 
               </div>
                <div className="chartContainer">
                  <Chart/>
                </div>
               
              </div>
              </div>
    )
  }

export default Weight
