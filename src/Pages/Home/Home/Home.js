import React from 'react';
// import ContactUs from '../../ContactUs/ContactUs';
// import Projects from '../../Projects/Projects';
// import Service from '../../Service/Service';
// import Footer from '../../Shared/Footer';
// import Testimonials from '../Testimonials/Testimonials';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div >
             <Banner></Banner>
            <div className='mx-6 md:mx-40 lg:mx-46'>
               
                {/* <Projects></Projects>
                <Service></Service>
                <Testimonials></Testimonials>
                <ContactUs></ContactUs>
                <Footer></Footer> */}
            </div>
        </div>
    );
};

export default Home;