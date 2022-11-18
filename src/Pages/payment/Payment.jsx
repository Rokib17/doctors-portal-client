import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Payment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const { state } = useLocation();
    const pay = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/payment`, {
            method: 'post',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                appointmentId: state.appointmentDetails._id,
                price: state.appointmentDetails.price,
                email: user.email
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.message) {
                    navigate("/dashboard/review")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    console.log(state.appointmentDetails)
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl p-4 justify-center items-center text-xl">
              <h2>Name : {state.appointmentDetails.patientName}</h2>
                <h2>{state.appointmentDetails.patient}</h2>
                <h2>Service Name : {state.appointmentDetails.treatment}</h2>
                
                <h2>Service charge : {state.appointmentDetails.price}</h2>
                <form onSubmit={pay}>
                    <div class="form-control w-full mt-3">
                        <button class="btn btn-primary">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
