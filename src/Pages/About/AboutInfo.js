import React from 'react';
import doctor from '../../assets/images/doctor5.png';
import PrimaryButton from '../Shared/PrimaryButton';
const AboutInfo = () => {
    return (
        <section className='-mt-40'>
            <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="max-w-lg rounded-lg shadow-2xl" />
          <div>
                            
              <p className="p-4">A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It’s our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile.

                When our patients walk into our office we want them to feel like they’ve stepped into a spa or 5-star hotel. They are taken care of, so they feel comfortable and safe. We pay attention to every detail from customer service, to the quality of care each patient receives. We treat each patient with attention, kindness and professionalism. Because that’s how we would like to be treated.
                We are grateful for the trust our patients give us when we are creating a signature smile for them. When we help people look good, they feel good. It gives them the confidence to go out and make positive real world changes in their lives. It gives them confidence to try new things that could have positive life-changing events. We love being a part of that journey, it makes us feel good.</p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
      </section>
    );
};

export default AboutInfo;