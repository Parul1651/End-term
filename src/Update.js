import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id....",id);
        axios.put(
            `https://634c2919317dc96a3092a23c.mockapi.io/stproject/${id}`,
        {
            name: name,
            email: email,
        })
        .then(() => {
           navigate("/read");
        });
    };

  return (
    <>
    <h2>Update</h2>
    <form class="form1">
    <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}
  >
    Update</button>
</form>
    </>
  )
}

export default Update;