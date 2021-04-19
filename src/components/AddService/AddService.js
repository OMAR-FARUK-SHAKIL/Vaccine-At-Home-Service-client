import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const axios = require("axios");


const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imageURl, setImageURL] = useState(null);


  const onSubmit = (data) => {
    console.log("form submitted", data);
    const product = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURl,
    };
    fetch("https://shrouded-thicket-71402.herokuapp.com/addService", {
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
    
    </div>
  );
};

export default AddService;
