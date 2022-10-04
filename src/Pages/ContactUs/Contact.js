import React from 'react';
import contact from '../../assets/images/contact-us.png';
const Contact = () => {
    return (
        <div>
             <section className='-mt-40'>
             <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={contact} className="max-w-xl rounded-lg " />
              <div>
                <h1 className="text-8xl font-bold text-secondary">CONTACT</h1>
              </div>
            </div>
          </div>
           </section>
        </div>
    );
};

export default Contact;