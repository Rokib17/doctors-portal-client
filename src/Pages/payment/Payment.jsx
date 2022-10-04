import React from 'react'
import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading'
const Payment = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const [response, setResponse] = useState(true)
    const [token, setToken] = useState("")
    const getToken = () => {
        setResponse(false)
        fetch(`http://localhost:5000/get-token/${state.appointmentId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setToken(data.token)
                setResponse(true)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const pay = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/payment`, {
            method: 'post',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                appointmentId: state.appointmentId,
                paymentToken: token
            })
        })
        .then(res => res.json())
            .then(data => {
               navigate("/dashboard/review")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl p-4">
                <div class="card-actions justify-center mt-2">
                    {
                        !response ? <Loading /> : <button onClick={getToken} class="btn btn-primary">get token</button>
                    }
                </div>
                <form onSubmit={pay}>
                    <div class="form-control w-full">
                        <label htmlFor='a' class="label">
                            <span class="label-text">your token</span>
                        </label>
                        <input id='a' type="text" placeholder="token" value={token} class="input input-bordered w-full" />
                    </div>
                    <div class="form-control w-full mt-3">
                        <button class="btn btn-primary">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
