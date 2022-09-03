import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
        const reviews =[
            {
                _id:1,
                name:'Mostofa Nouroz',
                review:'Doctors Portal is the best! I was in MAJOR pain and they got me right in and solved my tooth problem. Great friendly, knowledgeable, and thorough dentists and staff, highly recommend them.',
                location:'Pabna sadar',
                img:people1
            },
            {
                _id:2,
                name:'Hasan Ul Kabir',
                review:'Awesome guy with a great sense of humor. I really enjoy my visits with Doctors Portal! I also like how he treats you with kindness and makes you feel less nervous about procedures. I would highly recommend him.',
                location:'Pabna sadar',
                img:people2
            },
            {
                _id:3,
                name:'Ahsan Al Bashar',
                review:'Doctors Portal is the best!!! They make going to the dentist easy and relaxing!!! The staff are is fantastic!!! You won’t find a better dentist!!!',
                location:'Pabna sadar',
                img:people3
            },
        ];

    return (

        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold ml-5'>Testimonials</h4>
                    <h2 className='text-3xl ml-5'>What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className=" w-24 lg:w-48" alt=""/>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=><Review
                key= {review._id}
                review={review}
                ></Review>)
            }
            </div>
        </section>
    );
};

export default Testimonials;