import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Table from "../../Components/table/AnimalsTable"
import './Animals.scss'
import { myAxios } from "../../api"
import { useState } from "react"

function Animals() {
  const [registerForm, setRegisterForm] = useState({
    tagNumber: "",
    species: "", 
    breed: "",
    gender:"",
    birthDate: "",
    kraalAssignment: "",
    status:""
    })
  const handleInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setRegisterForm({...registerForm, [event.target.name]: event.target.value})
  }
  function handleSubmit (event:React.FormEvent<HTMLFormElement>){
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
              name="species" 
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
              placeholder="Breed"
              value={registerForm.breed}
            />
            <select
              value={registerForm.gender}
             onChange={handleInput}
              name="gender"
               >
                  <option value="Male">MALE</option>
                  <option value="Female">FEMALE</option>
               </select>
              
            <input 
            type="date"
             onChange={handleInput} 
             value={registerForm.birthDate}
             name="birthDate" 
             placeholder="Birth Date "
             />
            <input 
            type="text" 
            onChange={handleInput}
             name="kraalAssignment" 
             placeholder="Kraal Assignment"
             />
            <button>Register Animal</button>
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
