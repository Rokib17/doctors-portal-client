import React from "react";
import Footer from '../Shared/Footer';
import AboutBanner from "./AboutBanner";
import AboutInfo from "./AboutInfo";

const About = () => {
    return(
<div className="font-serif text-justify">
    <AboutBanner></AboutBanner>
    <AboutInfo></AboutInfo>
    <Footer></Footer>
    
</div>
    );
};
export default About;
