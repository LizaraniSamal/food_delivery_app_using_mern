import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch the list.");
      }
    } catch (error) {
      toast.error("Error fetching data from the server.");
      console.error(error);
    }
  };

  const removeFood = async (foodId) => {
      const response = await axios.delete(`${url}/api/food/remove`,{data:{id:foodId}});  
      console.log(response.data); // Handle the response if needed
      if (response.data.success) {
        toast.success("Food item deleted successfully.");
        setList(list.filter((item) => item._id !== foodId)); // Update the state to remove the deleted item
      } else {
        toast.error("Failed to delete the food item.");
      }
    
  }
 

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list_table">
        <div className="list_table_format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Actions</b>
        </div>
        {list.length === 0 ? (
          <p>No foods available</p>
        ) : (
          list.map((item, index) => (
            <div className="list_table_format" key={item.id || index}>
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
