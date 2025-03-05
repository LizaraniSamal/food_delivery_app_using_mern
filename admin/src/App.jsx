import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Routes,Route} from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Orders/Order";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app_content">
        <Sidebar />
        <Routes>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/list" element={<List/>}></Route>
            <Route path="/order" element={<Order/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
