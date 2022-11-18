import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
const Schedule = () => {
    const sdul = [
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM",
        "11.00 AM - 11.30 AM",
        "11.30 AM - 12.00 PM",
        "12.00 PM - 12.30 PM",
        "12.30 PM - 01.00 PM",
        "02.00 PM - 02.30 PM",
        "02.30 PM - 03.00 PM",
        "03.00 PM - 03.30 PM",
        "03.30 PM - 04.00 PM",
        "04.00 PM - 04.30 PM",
        "04.30 PM - 05.00 PM",
        "05.00 PM - 05.30 PM",
        "05.30 PM - 06.00 PM",
        "06.00 PM - 6.30 PM",
        "06.30 PM - 07.00 PM",
        "07.00 PM - 07.30 PM",
        "07.30 PM - 08.00 PM",
        "08.30 PM - 09.00 PM"
    ]
    const [date, setDate] = useState()
    const [name, setName] = useState("")
    const [schedule, setSchedule] = useState([])
    const [price, setPrice] = useState('')
    const scheduleHandle = (e) => {
        const check = schedule.find(s => s === e.target.value);
        if (!check) {
            setSchedule([...schedule, e.target.value])
        }
    }
    const addShedule = (e) => {
        e.preventDefault()
        if (name && schedule && date && price && price !== 0) {
            const obj = {
                price,
                name,
                schedule,
                date: format(date, 'PP')
            }
            fetch('http://localhost:5000/service', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(res => res.json())
                .then(m => {
                    toast(m.message)
                })
                .catch(e => e.json())
                .catch(e => {
                    console.log(e.error)
                    toast(e.error)
                })
        }
    }
    return (
        <div>
            <form onSubmit={addShedule} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />


                <select onChange={(e) => setName(e.target.value)} class="select select-warning w-full max-w-xs">
                    <option disabled selected>Pick a service</option>
                    <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Cavity Protection">Cavity Protection</option>
                    <option value="Pediatric Dental">Pediatric Dental</option>
                    <option value="Oral Surgery">Oral Surgery</option>
                </select>
                <select onChange={scheduleHandle} class="select select-warning w-full max-w-xs">
                    <option disabled selected>Pick a slot</option>
                    {
                        sdul.map(sd => <option value={sd} >{sd}</option>)
                    }
                </select>
                <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} placeholder="price" min='0' name='price' class="input input-bordered input-primary w-full max-w-xs" />
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Schedule;