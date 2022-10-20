import React from 'react';
import web from "../src/images/about.png";
import Common from "./Common";
import Cards from "./Cards";

const About =()=> {
    return (
        <>
        <Common 
        name='Welcome to About Page' 
        imgsrc={web}
        visit="/Contact"
        btname="Contact Now"
        />
        {/* <Cards/> */}
        </>
    );
};

export default About;