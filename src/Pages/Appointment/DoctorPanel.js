import React from 'react';

const DoctorPanel = ({ doctor, index }) => {
    const { name, specialty, img } = doctor;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-40 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
          
        </tr>
    );
};

export default DoctorPanel;