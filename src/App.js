import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Pages/Login/Login";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/Checkout/CheckOut";
import Home from "./components/Pages/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Blog from "./components/Pages/Blog/Blog";
import Register from "./components/Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>} />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="about" element={<About></About>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
