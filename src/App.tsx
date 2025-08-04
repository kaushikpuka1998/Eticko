import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import HeadNavBar from "./components/HeadNavBar/HeadNavBar";
import SalePortion from "./components/SalePortion/SalePortion";
import About from "./components/About/About";
import WomenFashion from "./components/WomenFashion/WomenFashion";
import MenFashion from "./components/MenFashion/MenFashion";
import Electronics from "./components/Electronics/Electronics";
import HomeLifestyle from "./components/HomeLifestyle/HomeLifestyle";
import Medicine from "./components/Medicine/Medicine";
import Sports from "./components/Sports/Sports";
import BabyToys from "./components/BabyToys/BabyToys";
import Groceries from "./components/Groceries/Groceries";
import HealthBeauty from "./components/HealthBeauty/HealthBeauty";
import Contact from "./components/Contact/Contact";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import LoginSignUpComponent from "./components/loginSignUpComponent/loginSignUpComponent.tsx";


function App() {
    return (
        <BrowserRouter>
            <SalePortion/>
            <HeadNavBar/>
            <Routes>
                //top-Bar
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signup" element={<LoginSignUpComponent signup={true}/>}/>
                <Route path="/login" element={<LoginSignUpComponent signup={false}/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/cart" element={<Cart/>}/>

                //LeftBar
                <Route path="/women-fashion" element={<WomenFashion/>}/>
                <Route path="/men-fashion" element={<MenFashion/>}/>
                <Route path="/electronics" element={<Electronics/>}/>
                <Route path="/home-lifestyle" element={<HomeLifestyle/>}/>
                <Route path="medicine" element={<Medicine/>}/>
                <Route path="/sports" element={<Sports/>}/>
                <Route path="/baby-toy" element={<BabyToys/>}/>
                <Route path="/groceries" element={<Groceries/>}/>
                <Route path="/health" element={<HealthBeauty/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
