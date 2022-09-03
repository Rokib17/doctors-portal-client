import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Care = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 ">With a combination of quality treatment, friendly efficiency and a few laughs along the way, we make your dental visit both pleasant and comfortable. The staff at Doctors Portal Dental prides itself on treating the person, not just the mouth, and working in partnership with you to improve and maintain your oral health.</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Care;