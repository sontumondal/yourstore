import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Layout/Header/Home/Home'
import MyNavbar from "./pages/Layout/Header/MyNavbar"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Product from "./pages/Products/Product"
import Smartphones from "./pages/Products/smartphone/Smartphones"
import SingleSmartPhone from "./pages/Products/smartphone/SingleSmartPhone"
import Laptops from "./pages/Products/Laptops/Laptops"
import Skincare from "./pages/Products/Skincare/Skincare"
import Fragrances from "./pages/Products/Fragrances/Fragrances"
import HomeDecoration from "./pages/Products/HomeDecoration/HomeDecoration"
import Groceries from "./pages/Products/Groceries/Groceries"
import Cart from "./pages/Cart/Cart"
import BuyNow from "./pages/Products/smartphone/BuyNow"
import Payment from "./pages/Products/smartphone/Payment"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Logout from "./pages/auth/Logout"
import Footer from "./pages/Layout/Footer/Footer"
import Search from "./pages/Layout/Header/Home/searchproducts/Search"
import Errorpage from "./pages/ErroePage/Errorpage"


function App() {


  return (
    <>
      
     
      <Router>
      <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product/>} >
            <Route index element={<Smartphones/>}></Route>
            <Route path="smartphones" element={<Smartphones/>}/>
            <Route path="laptops" element={<Laptops/>}/>
            <Route path="skincare" element={<Skincare/>}/>
            <Route path="fragrances" element={<Fragrances/>}/>
            <Route path="homedecoration" element={<HomeDecoration/>}/>
            <Route path="groceries" element={<Groceries/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/buynow" element={<BuyNow/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/singlesmartphone/:id" element={<SingleSmartPhone/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="*" element={<Errorpage/>}/>

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
