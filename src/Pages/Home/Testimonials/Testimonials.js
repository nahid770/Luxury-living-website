import React from 'react';
import TestimonialCard from './TestimonialCard';



const Testimonials = () => {
    return (
       <div className='bg-[#F6F6F6] py-24 md:mt-16 mt-10'>
            <div>
                <h2 className='text-indigo-700 text-center mb-10 md:mb-0 text-2xl md:text-4xl font-bold font-roboto'>Testimonials</h2>
                <TestimonialCard></TestimonialCard>
            </div>
       </div>
    );
};

export default Testimonials;