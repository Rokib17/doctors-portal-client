import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin'
import { toast } from 'react-toastify';

const MyAppointments = () => {
    const [res, setRes] = useState('')
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const navigate = useNavigate()

    const paymentPage = (details) => {
        navigate('/payment', { state: { appointmentDetails: details } })
    }
    const cancelBoking = (id) => {
        try {
            fetch(`http://localhost:5000/delete-booking/${id}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            toast.success('booking delete success')
            setRes('success')
        } catch (error) {
            toast.error('booking delete fail')
        }
    }
    useEffect(() => {
        if (user || res) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
        setRes('')
    }, [user, res])

    return (
        <div>
            <h2>All Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Pament status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                {
                                    admin ? a.payment === 'paid' ? <td><div class="badge badge-success">paid</div></td> : <td><div class="badge badge-warning ">unpaid</div></td> : a.payment === 'paid' ? <td><div class="badge badge-success">paid</div></td> : <td onClick={() => paymentPage(a)}><div class="badge badge-warning ">pay</div></td>
                                }
                                {
                                    a.payment === 'paid' ? <td>Success</td> : <td onClick={() => cancelBoking(a._id)}>Cancel</td>
                                }

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;