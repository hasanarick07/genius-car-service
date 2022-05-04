import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Experts from "./Pages/Home/Experts/Experts";
import Home from "./Pages/Home/Home";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/LogIn/Login";
import Resister from "./Pages/Register/Register";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/experts" element={<Experts></Experts>}></Route>
        <Route
          path="/services/:serviceDetails"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/logIN" element={<Login></Login>}></Route>
        <Route path="/register" element={<Resister></Resister>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
