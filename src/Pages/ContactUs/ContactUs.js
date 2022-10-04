import React from 'react';
import Footer from '../Shared/Footer';
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";


const ContactUs = () => {
    return (
        <div className='font-serif text-justify'>
           <Contact></Contact>
           <ContactInfo></ContactInfo>
           <Footer></Footer>
        </div>
    );
};

export default ContactUs;