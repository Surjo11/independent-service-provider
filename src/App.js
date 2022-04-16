import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/Checkout/CheckOut";
import Home from "./components/Pages/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="checkout" element={<CheckOut></CheckOut>} />
        <Route path="about" element={<About></About>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
