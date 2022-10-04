import React from 'react';
import email from '../../assets/icons/email.png';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import ContactCard from './ContactCard';

const ContactInfo = () => {
    return (
        
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                 <ContactCard  cardTitle="Call Us!" cardAction="+8801794703549" bgClass="bg-gradient-to-r from-secondary to-primary"img={phone}></ContactCard>
                <ContactCard cardTitle="Our Locations" cardAction="Pabna Sadar,6600" bgClass="bg-[#3A4256]" img={marker}></ContactCard>
                <ContactCard cardTitle="E-mail Us!" cardAction="doctor_portal@gmail.com" bgClass="bg-gradient-to-r from-secondary to-primary" img={email}></ContactCard>
              
            </div>
        );
    };

export default ContactInfo;