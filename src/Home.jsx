import React from 'react';
import vid from'../src/video.mp4';
import Hackathon from "./Hackathon"
import web from "../src/images/h4.webp";
import web1 from "../src/images/h5.webp";
import web2 from "../src/images/h6.webp";
// import Common from "./Common";
const Home =()=> {
    const img={
        one:{web},
        two:{web2},
        three:{web1}
    }
    return (
       <> 
       <div className="">
        <div className='row text-center my-5'>
        
                            <h1>
                                
                                <strong className="brand-name">Web Dev 2022 !</strong>
                            </h1>
                           
                            <div className="mt-3">
                                <button type="submit" href="#" className="btn-get-started">
                                    Get Started
                                </button>
        {/* <img src={web} class="" alt="..."  style={{height: "400px", weight:"400px"}}/> */}
        
        </div>
        <div className='row mt-5'>
            <p className="text-center fs-1 fw-bolder"> Trending Hackathons</p>
            <div className="col-4">
            <Hackathon image={img.one}/>
            </div>
            <div className="col-4">
            <Hackathon image={img.two}/>
            </div>
            <div className="col-4">
            <Hackathon image={img.three}/>
            </div>
          
        </div>

{/* <video autoPlay loop muted playsInline>
    <source src={vid} className='back'></source>
</video> */}

       </div>
       </div>
       </>
        
    )
};

export default Home;