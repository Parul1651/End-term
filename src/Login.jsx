import React from 'react';
import Create from "./Create";
import Read from "./Read";
import pic1 from "../src/imglogin.png";
function Login() {
    return (
        <div className="container" >
            <Create></Create>
            <div className="image">
                <img class="logimg" src={pic1}></img>
                </div>
        </div>
       
        
    );
} 

export default Login;