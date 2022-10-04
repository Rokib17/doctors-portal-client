import React from 'react';
import { Link } from 'react-router-dom';
const PrimaryButton = ({children}) => {
    return (
        <Link to="/appointment">
        <button className="btn btn-primary uppercse text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </Link>
    );
};

export default PrimaryButton;