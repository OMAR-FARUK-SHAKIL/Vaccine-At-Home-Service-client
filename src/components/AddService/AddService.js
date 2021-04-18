import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const axios = require("axios");


const AddService = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURl, setImageURL] = useState(null);

//   const [products, setProducts] = useState([]);


// const allGoods =()=>{
// useEffect(()=>{
//   fetch("http://localhost:4000/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data));
 
//   }, [])
// / }
// allGoods();


//   const deleteProduct = (id) => {
//      console.log(id);
//     fetch(`http://localhost:4000/delete/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((result) => {
//           alert('deleted successfully,Reload please!');
//         console.log("deleted successfully!!");
//      const remainProduct = products.filter(product=>product._id!==id);
//      setProducts(remainProduct);
//       });
//   };



  const onSubmit = (data) => {
    console.log("form submitted", data);
    const product = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURl,
    };
    fetch("http://localhost:5500/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
           alert('Your new service added successfully');
        }
      });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "fb591b302a303b79a247b8e957b14fc2");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        console.log(res.data.data.display_url);
        setImageURL(res.data.data.display_url);
      })
      .catch((err) => console.log(err));
  };




//   const newProduct = () => {
//     document.getElementById("new-product").style.display = "block";
//     document.getElementById("manage-product").style.display = "none";
//   };
//   const manageProduct = () => {
//     document.getElementById("new-product").style.display = "none";
//     document.getElementById("manage-product").style.display = "block";
//   };

  

  return (
    <div>
     
      <div id="new-service">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <p>
            <span>Name:</span>
            <input name="name" defaultValue="vaccine for children" ref={register({ required: true })} />
          </p>
          <p>
            <span>Description:</span>
            <textarea rows="4" cols="40" name="description"  defaultValue="vaccine can be pushed for the prevent diseases." ref={register({ required: true })}/>
          </p>
          <p>
            <span>Price:</span>
            <input name="price" defaultValue="500" ref={register({ required: true })} />
          </p>
         
          <p>
            <span>service relevant Image:</span>
            <input type="file" onChange={handleImageUpload} />
          </p>

          <input type="submit" />
          
        </form>
      </div>

      {/* <div id="manage-product">
      {products.length === 0 && (
            <h1>Loading...</h1>      
         )} 
         { products.map(item =>
         <li>
            <h3>name:{item.name} --price:{item.price} --quantity:{item.quantity}</h3>
            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
            </li>
            )}
           
         </div>  */}
     
    </div>
  );
};

export default AddService;
