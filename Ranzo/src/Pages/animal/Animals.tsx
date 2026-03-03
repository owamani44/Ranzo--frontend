import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Table from "../../Components/table/AnimalsTable"
import './Animals.scss'
import { myAxios } from "../../api"
import { useState } from "react"
import axios from "axios"

function Animals() {
  const [submitError, setSubmitError] = useState("")
  const [registerForm, setRegisterForm] = useState({
    tagNumber: "",
    species: "COW", 
    breed: "",
    gender: "MALE",
    birthDate: "",
    kraalAssignment: "",
    status: "ALIVE"
    })
  const handleInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        if (submitError) setSubmitError("")
        setRegisterForm({...registerForm, [event.target.name]: event.target.value})
  }
  function handleSubmit (event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const payload = {
      ...registerForm,
      tagNumber: registerForm.tagNumber.trim(),
      breed: registerForm.breed.trim(),
      kraalAssignment: registerForm.kraalAssignment.trim(),
    };
    if (!payload.tagNumber || !payload.breed || !payload.birthDate || !payload.kraalAssignment) {
      setSubmitError("Please fill in Tag Number, Breed, Birth Date, and Kraal Assignment.");
      return;
    }
    myAxios.post("/animals", payload)
    .then(res=>{
      console.log("Animal registered successfully", res.data)
      setSubmitError("")
      setRegisterForm({
        tagNumber: "",
        species: "COW",
        breed: "",
        gender: "MALE",
        birthDate: "",
        kraalAssignment: "",
        status: "ALIVE",
      });
    })
    .catch(err=>{
      if (axios.isAxiosError(err)) {
        const backendMessage =
          (typeof err.response?.data === "string" && err.response.data) ||
          (err.response?.data as { message?: string })?.message ||
          (err.response?.data as { error?: string })?.error ||
          "";
        setSubmitError(
          backendMessage || `Request failed with status ${err.response?.status ?? "unknown"}`
        );
        console.error("Error registering animal", {
          status: err.response?.status,
          data: err.response?.data,
          payload,
        });
        return;
      }
      setSubmitError("Failed to register animal. Please try again.");
      console.error("Error registering animal", err)
    })
  }
  return (
    <div className="animals">
      <div className="sideBar">
        <Sidebar/>
        </div>
    
      <div className="container">
        <Navbar/>
        <div className="addAnimal">
          <h3>Register Animal</h3>
          <form onSubmit={handleSubmit} className="animalForm">
            <input 
            type="text" 
            onChange={handleInput} 
            name="tagNumber" 
            required
            value={registerForm.tagNumber}
            placeholder="Tag Number"
            />
            <select
             
              onChange={handleInput} 
              name="species" 
              value={registerForm.species}
             >
                <option value="COW">COW</option>
                <option value="GOAT">GOAT</option>
                <option value="SHEEP">SHEEP</option>
            </select>
            <select
             
              onChange={handleInput} 
              name="status" 
              value={registerForm.status}
             >
                <option value="ALIVE">ALIVE</option>
                <option value="SOLD">SOLD</option>
                <option value="DEAD">DEAD</option>
                <option value="LOST">LOST</option>
            </select>
            <input 
            type="text"
             onChange={handleInput}
              name="breed" 
              required
              placeholder="Breed"
              value={registerForm.breed}
            />
            <select
              value={registerForm.gender}
             onChange={handleInput}
              name="gender"
               >
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
               </select>
              
            <input 
            type="date"
             onChange={handleInput} 
             required
             value={registerForm.birthDate}
             name="birthDate" 
             placeholder="Birth Date "
             />
            <input 
            type="text" 
            onChange={handleInput}
            required
            value={registerForm.kraalAssignment}
             name="kraalAssignment" 
             placeholder="Kraal Assignment"
             />
            <button type="submit">Register Animal</button>
            {submitError ? <p style={{ color: "red", marginTop: "8px" }}>{submitError}</p> : null}
          </form>
          
        </div>
       <div className="table">
        <Table/>
       </div>
      </div>
      
    </div>
  )
}

export default Animals
