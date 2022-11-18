import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyToken = () => {
    const [user] = useAuthState(auth);
    const [price, setPrice] = useState('')
    const [availablePrice, setAvailablePrice] = useState([])
    const [allToken, setAllToken] = useState([])
    const [res, setRes] = useState('');
    const buyToken = (e) => {
        e.preventDefault()
        if (price && price !== 0 && user.email) {
            fetch('http://localhost:5000/buy-token', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price, email: user.email })
            }).then(res => res.json())
                .then(m => {
                    toast('get token success')
                    setRes('success')
                })
                .catch(e => e.json())
                .catch(e => {
                    console.log(e.error)
                    toast(e.error)
                })
        } else {
            toast.error('Price required')
        }
    }
    const getPrice = async () => {
        fetch('http://localhost:5000/get-price', {
            method: 'GET'
        }).then(res => res.json())
            .then(m => {
                setAvailablePrice(m)
            })
            .catch(e => e.json())
            .catch(e => {
                console.log(e)
            })
    }
    const getToken = async () => {
        fetch(`http://localhost:5000/get-user-token/${user.email}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(m => {
                setAllToken(m)
            })
            .catch(e => e.json())
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        if (res) {
            getPrice()
            getToken()
            setRes('')
        }
    }, [res])
    useEffect(() => {
        getPrice()
        getToken()
    }, [])
    return (
        <div>
            <div className='w-full flex justify-center items-center mb-5'>
                <form onSubmit={buyToken} class="w-[400px] mx-auto">
                    <select value={price} onChange={(e) => setPrice(e.target.value)} class="select select-bordered w-full max-w-xs">
                        <option value="">Select-price</option>
                        {
                            availablePrice.length > 0 && availablePrice.map((p, i) => <option key={i} value={p}>{p}</option>)
                        }
                    </select>
                    <button className="btn btn-secondary w-full max-w-xs mt-3" >Buy Token</button>
                </form>
            </div>
            <div className='mt-4'>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToken.length > 0 && allToken.map((t, i) => {
                                return (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{t.price}</td>
                                        <td>{t.token}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyToken

