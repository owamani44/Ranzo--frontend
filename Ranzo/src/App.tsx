
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Animals from "./Pages/animal/Animals";
import Login from "./Pages/login/Login";
import Register from "./Pages/login/Register";
import Medical from "./Pages/medical/medical";
import Weight from "./Pages/weight/Weight";
import Home from "./Pages/home/Home";


function App() {


  return (
  
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="animals" element={<Animals/>}/>
          <Route path="medical-records" element={<Medical/>}/>
          <Route path="weight-records" element={<Weight/>}/>
          </Route> 
        </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
