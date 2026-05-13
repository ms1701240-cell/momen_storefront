
import {  useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import "./App.css";
import NavRev from "./NavRev";
import ShowProducts from "./ShowProducts";
import { products } from "./ProductsData";
import Boxshow from "./Boxshow";
import Background from "./components/Background";
import Section from "./components/Section";
import Contact from "./components/Contact";
import About from "./components/About";
import Sign from "./components/Sign";
import Loader from "./components/Loader";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Login from "./components/Login";
 "./ProductsData";
import axios from "axios";
import Profile from "./components/Profile";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
const App = () => {
  console.log('Render Happend')
const[Category,Setcategory]=useState('')
const[userprofile,setuserprofile]=useState(()=>{
  const savedname=localStorage.getItem('username');
  return savedname?{Username:savedname}:null;
})
const[modal,setmodal]=useState(null);
const[cartprod,setcart]=useState(()=>{
  const saved=localStorage.getItem('box');
  if(saved){
    return JSON.parse(saved)
  }else{
    return[]
  }
});
const showcartnum=async()=>{
  const token=localStorage.getItem('token')
 if (token && cartprod.length > 0) {
    await axios.post('https://momen-store.vercel.app/cartsaved', 
      { products: cartprod }, // ابعت المنتجات بس
      { headers: { 'authorization': token } } // العسكري هيعرف الـ ID من هنا
    );
  }
}
useEffect(()=>{
   localStorage.setItem('box',JSON.stringify(cartprod))
   showcartnum()
},[cartprod]);
//const[page,setpage]=useState('products')

const[search,getsearch]=useState('')
const[loading,setloading]=useState(true)

useEffect(()=>{
 const timer= setTimeout(()=>{
        setloading(false)
  },2500)
  return ()=> clearTimeout(timer)
},[loading])
return (
    <>
      <Toaster position="top-right" />
     
    {loading===true&&(
      <Loader />
    )}
   <Router>
    <NavRev userprofile={userprofile} setuserprofile={setuserprofile} setcat={Setcategory} cartprod={cartprod}   getsearch={getsearch}  />
    <Routes>
      <Route path="/" element={<><Background  setcat={Setcategory}/>  <Section/>
          <Feedbacks />
          </> }/>
      <Route path="/products" element={<><Background  setcat={Setcategory}/>  <Section/>
          <Feedbacks />
          <Footer/></> }/>
      <Route path="/contact" element={<><Contact/></>}/>
      <Route path="/cat" element={<> <ShowProducts Category={Category} products={Category === '' || Category === 'all' ? 
      Object.values(products).flat() : products[Category]
    } modal={modal} setmodal={setmodal} setcart={setcart} cartprod={cartprod} search={search} getsearch={getsearch} /></>}/>
    <Route path="/box" element={<><Boxshow cartprod={cartprod} setcart={setcart}/></>}/>
     <Route path="/signup" element={<> <Sign  setcart={setcart}/></>}/>
      <Route path="/about" element={<><About/></>}/>
       <Route path="/login" element={<><Login setuserprofile={setuserprofile}  setcart={setcart}/></>}/>
        <Route path="/profile" element={<> <Profile userprofile={userprofile} setuserprofile={setuserprofile}/></>}/>
    </Routes>
   </Router>
    </>
  );
}
export default App;
