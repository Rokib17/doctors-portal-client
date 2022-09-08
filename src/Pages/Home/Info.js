import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
            <InfoCard cardTitle="Opening Hours" cardAction="10:00 am -09:00 pm" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardAction="Pabna Sadar,6600" bgClass="bg-[#3A4256]" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardAction="+8801794703549" bgClass="bg-gradient-to-r from-secondary to-primary"img={phone}></InfoCard>
          
        </div>
    );
};

export default Info;