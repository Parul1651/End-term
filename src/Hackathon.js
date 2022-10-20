import { propTypes } from "google-map-react";
import React from "react";
import web from "../src/images/h6.webp";

const Hackathon =(props)=>{
    const img=props.image
        return(
            <>
            
            <div class="card" style={{width: "18rem;"}}>
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</>
        )
}

export default Hackathon;