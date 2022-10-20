import React from 'react';
import Cards from './Cards';
import web from "../src/images/bg2.jpeg";
const Common =(props)=> {
    return (
        
        <>
        <section id="header overflow-hidden mt-5" className="" >
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 m-auto">
                            <h1>
                                <span className="text-white">{props.name}</span>
                                <strong className="brand-name">MyPage</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented developer making websites.
                            </h2>
                            <div className="mt-3">
                                <button type="submit" href= {props.visit} className="btn-get-started">
                                    {props.btname}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="common img" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="ms-5 my-5 row">
                    <p className=' fw-bold fs-1 ' style={{marginLeft:"556px"}}>Features</p>
                    <div className="col-4">
                        <Cards/>
                    </div>
                    <div className="col-4">
                        <Cards/>
                    </div>
                    <div className="col-4">
                        <Cards/>
                    </div>
                </div>
            </div>
            
            
        </section>
        </>
    );
};

export default Common;