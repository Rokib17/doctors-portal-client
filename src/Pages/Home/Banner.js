import React from 'react';
import chair from '../../assets/images/chair.png';
import bg1 from '../../assets/images/bg1.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
       <section style={{
        background:`url(${bg1})`,
        backgroundSize: 'cover'
    }}>
         <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
            <p className="py-6  text-2xl">If you are experiencing pain in your mouth, you probably have a tooth infection. Why wait till it gets worse to seek treatment? </p>
           <PrimaryButton></PrimaryButton>
          </div>
        </div>
      </div>
       </section>
    );
};

export default Banner;