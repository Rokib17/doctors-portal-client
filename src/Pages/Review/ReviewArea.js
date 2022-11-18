import React, { useEffect, useState } from 'react';

const ReviewArea = () => {
    const [userReview, setUserReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])

    const color = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    return (
        <section className='font-serif'>
            <h1 className='text-center my-5 text-purple-500 text-2xl'>Patients Feedback</h1>
            <div className='my-5'>

                <div className="container flex justify-between ">

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            userReview.map(review => <div key={review._id} className='col-md-4 d-flex align-items-stretch my-4'>
                                <div className=" p-4 card lg:max-w-lg bg-base-100 shadow-xl m-2" style={{ minWidth: '300px' }}>
                                    <h3 className='text-center mb-5' >{review.name}</h3>

                                    <p>{review.description}</p>
                                    <div className='py-3'>
                                        <span>
                                            <i style={{ color }} className={review.rating >= 1 ? 'fas fa-star text-orange-400'  : 'far fa-star'}></i>
                                        </span>
                                        <span>
                                            <i style={{ color }} className={review.rating >= 2 ? 'fas fa-star text-orange-400' : 'far fa-star'}></i>
                                        </span>
                                        <span>
                                            <i style={{ color }} className={review.rating >= 3 ? 'fas fa-star text-orange-400'  : 'far fa-star'}></i>
                                        </span>
                                        <span>
                                            <i style={{color}} className={review.rating >= 4 ? 'fas fa-star text-orange-400'  : 'far fa-star'}></i>
                                        </span>
                                        <span>
                                            <i style={{color}} className={review.rating >= 5 ? 'fas fa-star text-orange-400' : 'far fa-star'}></i>
                                        </span>
                                    </div>
                                   

                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewArea;