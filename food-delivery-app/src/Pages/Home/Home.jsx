import React, { useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppComponent from '../../Components/AppComponent/AppComponent';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  const [category,setCategory]= useState("All");
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <ExploreMenu category={category} setCategory ={setCategory}/>
      <FoodDisplay category={category}/>
      <AppComponent/>
      <Footer/>
    </div>
    </>
  )
}

export default Home