import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const Token = () => {

    const [price, setPrice] = useState('')
    const [allToken, setAllToken] = useState([])
    const [res, setRes] = useState('')

    const addToken = (e) => {
        e.preventDefault()
        if (price && price !== 0) {
            fetch('http://localhost:5000/add-token', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price })
            }).then(res => res.json())
                .then(m => {
                    toast(m.message)
                    setRes('success')
                })
                .catch(e => e.json())
                .catch(e => {
                    toast(e.error)
                })
        } else {
            toast.error('Price required')
        }
    }
    const getToken = async () => {
        fetch('http://localhost:5000/get-token', {
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
    const deleteToken = (id) => {
        fetch(`http://localhost:5000/delete-token/${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(m => {
                toast(m.message)
                setRes('success')
                setPrice("")
            })
            .catch(e => e.json())
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        if (res) {
            setRes('')
            getToken()
        }
    }, [res])
    useEffect(() => {
        getToken()
    }, [])
    return (
        <div>
            <div className='w-full flex justify-center items-center mb-5'>
                <form onSubmit={addToken} class="w-[400px] mx-auto">
                    <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} placeholder="price" min='0' name='price' class="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-secondary w-full max-w-xs mt-3" >Add Token</button>
                </form>
            </div>
            <div className='mt-4 '>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Token</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToken.length > 0 && allToken.map((t, i) => {
                                return (
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{t.price}</td>
                                        <td>{t.token}</td>
                                       <td> 
                                            <div class={`badge ${t.status === 'sold' ? 'badge-success' : 'badge-warning' } `}>{t.status}</div>
                                       </td>
                                        <td onClick={() => deleteToken(t._id)}>
                                            <div class="badge badge-danger ">Delete</div>
                                        </td>
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

export default Token
