import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }}
        
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-140px]' src={doctor} alt=""/>
            </div>

            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment </h3>
                <h2 className='text-3xl text-white mb-4'>Make an Appointment Today</h2>
               <p className='text-white mr-10 mb-4'>Schedule your appointment at a time that's convenient for you! Just select an appointment option below and take a few minutes to provide us with information such as your name and phone number. You can set the appointment time yourself when you book an appointment with us through our website.</p>
               <PrimaryButton>Get Started</PrimaryButton>
            </div>
               
        </section>
    );
};

export default MakeAppointment;