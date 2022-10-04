import React from 'react';
import doctor_icon from '../../assets/images/doctor-icon.png';
import PrimaryButton from '../Shared/PrimaryButton';
const AboutBanner = () => {
    return (
        <section className='-mt-40'>
             <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={doctor_icon} className="max-w-sm rounded-lg " />
              <div>
                <h1 className="text-5xl font-bold ">Meet</h1>
                <h1 className="text-5xl font-bold ">The Best Dentist</h1>
                <p className="py-6  text-2xl">If you are experiencing pain in your mouth, you probably have a tooth infection. Why wait till it gets worse to seek treatment? </p>
               <PrimaryButton></PrimaryButton>
              </div>
            </div>
          </div>
           </section>
    );
};

export default AboutBanner;