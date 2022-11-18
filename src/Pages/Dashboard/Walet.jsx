import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Walet = () => {
    const [user] = useAuthState(auth);
    const [res, setRes] = useState('')
    const [token, setToken] = useState('')
    const [walet, myWalet] = useState({})
    const rechargeWalet = (e) => {
        e.preventDefault()
        if (token && token !== 0) {
            fetch('http://localhost:5000/recharge-walet', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ token })
            }).then(res => res.json())
                .then(m => {
                    toast(m.message)
                    setRes('success')
                })
                .catch(e => e.json())
                .catch(e => {
                    toast(e.message)
                })
        } else {
            toast.error('Price required')
        }
    }
    const getWalet = async () => {
        fetch(`http://localhost:5000/get-walet/${user.email}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(m => {
                myWalet(m)
                setRes('success')
            })
            .catch(e => e.json())
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        getWalet()
    }, [])
    useEffect(() => {
        if (res) {
            getWalet()
            setRes('')
        }
    }, [res])
    return (
        <section>
            
            <div>
        <div className='w-full flex justify-center items-center mb-5'>
            <form onSubmit={rechargeWalet} class="w-[400px] mx-auto">
                <input onChange={(e) => setToken(e.target.value)} type="text" value={token} placeholder="token" class="input input-bordered input-primary w-full max-w-xs" />
                <button className="btn btn-secondary w-full max-w-xs mt-3" >Recharge</button>
            </form>
        </div>
        <div className='w-full flex justify-center items-center mb-5'>
            <div className="p-4 card lg:max-w-lg bg-base-100 shadow-xl m-2 justify-center items-center text-lg"style={{ minWidth: '300px' }}>
                <h2>Amount : {walet.amount ? walet.amount : 0}</h2>
                <h2>Name : {user.displayName}</h2>
                <h2>{user.email}</h2>
                
            </div>
        </div>
    </div>
    </section>
    )
}

export default Walet
