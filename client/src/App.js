import {Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/post" element = {<MainPage/>}>
        </Route>
        <Route path="/api/auth/register" element={<Register/>}></Route>
        <Route path="/api/auth/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
