import React from 'react';
import Projects from '../../Projects/Projects';
import Service from '../../Service/Service';
// import ContactUs from '../../ContactUs/ContactUs';
// import Projects from '../../Projects/Projects';
// import Service from '../../Service/Service';
// import Footer from '../../Shared/Footer';
import Testimonials from '../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import ContactUs from '../../ContactUs/ContactUs';

const Home = () => {
    return (
        <div >
             <Banner></Banner>
            <div className='mx-6 md:mx-40 lg:mx-46'>
               <Projects></Projects>
                <Service></Service>
            </div>
            <Testimonials></Testimonials>
            <div className='mx-6 md:mx-40 lg:mx-46'>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;