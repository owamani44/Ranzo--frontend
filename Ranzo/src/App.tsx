
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Animals from "./Pages/animal/Animals";
import Login from "./Pages/login/Login";
import Medical from "./Pages/medical/medical";
import Weight from "./Pages/weight/Weight";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import Register from "./Pages/register/Register";


function App() {


  return (
  
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="signup" element={<Register/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="animals" element={<Animals/>}/>
          <Route path="medical-records" element={<Medical/>}/>
          <Route path="weight-records" element={<Weight/>}/>
          <Route path="profile" element={<Profile/> }/>
          </Route> 
        </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
