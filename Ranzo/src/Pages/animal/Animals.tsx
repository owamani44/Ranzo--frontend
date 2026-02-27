import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Table from "../../Components/table/AnimalsTable"
import './Animals.scss'
import { myAxios } from "../../api"

function Animals() {
  const [registerForm, setRegisterForm] = useState({
    tagNumber: "",
    species: "", 
    breed: "",
    gender:"",
    birthDate: "",
    kraalAssignment: "",
    })
  const handleInput = (event)=>{
        setRegisterForm({...registerForm, [event.target.name]: event.target.value})
  }
  function handleSubmit (event){
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
            <input type="text" onChange={handleInput} name="tagNumber" placeholder="Tag Number"/>
            <input type="text" onChange={handleInput} name="species" placeholder="Species"/>
            <input type="text" onChange={handleInput} name="breed" placeholder="Breed"/>
            <input type="text" onChange={handleInput} name="gender" placeholder="Gender"/>
            <input type="date" onChange={handleInput} name="birthDate" placeholder="Birth Date "/>
            <input type="text" onChange={handleInput} name="kraalAssignment" placeholder="Kraal Assignment"/>
          </form>
          <button>Register Animal</button>
        </div>
       <div className="table">
        <Table/>
       </div>
      </div>
      
    </div>
  )
}

export default Animals
