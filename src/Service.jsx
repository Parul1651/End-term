import React from 'react';
import web from "../src/images/service3_prev_ui.png";
import Common from "./Common";
import Navbar from './Navbar';
const Service =()=> {
    return (
        <>
         <Common 
        name="Welcome to Service Page" 
        imgsrc={web}
        visit="/Login"
        btname="Login to get started"
        />
        </>
    );
};

export default Service;