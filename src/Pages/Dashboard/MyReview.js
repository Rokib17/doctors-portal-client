import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaStar } from "react-icons/fa";

const MyReview = () => {
    const [user, rating] = useAuthState(auth);

    const [review, setReview] = useState({})

    

    //rating 
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };

    const handleBlur = (e) => {
        const newReview = { ...review, name: user.displayName }
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const handleSubmit = (e) => {
        const feedback = { ...review, rating: currentValue}
        fetch('http://localhost:5000/postReview', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedback)
        }).then(res => {
            if (res) {
                alert("Review Added Successfully.")
            }
        })
        e.preventDefault()
    }
    return (
        <div className='font-serif text-justify'>
            <h1 className='text-purple-500 text-3xl'>Give Your Review</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" name='name' className='form-control input input-bordered w-full max-w-xs mt-5' defaultValue={user.displayName} />
                <div>
                    <textarea className='form-control textarea textarea-primary w-80 h-60 mb-3 mt-5' onBlur={handleBlur} placeholder="Your Review" name='description' required></textarea>
                </div>

            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>

                <div className='mt-5'>
                    <button className='btn btn-bg text-light' type='submit'>Submit</button>
                </div>



            </form>

        </div>
    );
};


const styles = { 
    stars: {
        display: "flex",
        flexDirection: "row",
      },
}

export default MyReview;