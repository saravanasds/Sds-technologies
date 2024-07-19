import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Aboutcom2 = () => {
    const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
    const { ref: peopleRef, inView: peopleInView } = useInView({ triggerOnce: true });
    const { ref: developersRef, inView: developersInView } = useInView({ triggerOnce: true });

    return (
        <div className='w-[100%] h-auto md:p-10'>
            <div className='w-[100%] h-auto md:p-5 text-white rounded-2xl' data-aos="fade-up" data-aos-delay="200">
                <h2 className='w-full text-white text-2xl md:text-3xl font-semibold md:mb-8 lg:text-5xl text-center py-6 text-border-bottom' data-aos="fade-up" data-aos-delay="300">Some numbers to Support Us</h2>

                <div className='w-[100%] p-4 pt-8'>
                    <div className='bg-gradient-to-r from-black via-[#73d0ff53] to-black p-[4px] rounded-xl'>
                        <div className='bg-gradient-to-b from-black via-[#73d0ff5a] to-black p-[4px] rounded-xl'>
                            <div className='bg-gradient-to-r from-black via-[#73d0ff51] to-black p-[4px] rounded-xl'>
                                <div className='bg-gradient-to-b from-black via-[#73d0ff49] to-black p-8 rounded-xl flex flex-col justify-center lg:gap-20 gap-8 sm:flex-col lg:flex-row flex-wrap'>
                                    <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 sm:flex-row' data-aos="fade-up" data-aos-delay="200">
                                        <div ref={clientsRef} className='w-full md:w-[200px] mb-4' data-aos="fade-up" data-aos-delay="200">
                                            <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 text-border'>
                                                {clientsInView && <CountUp end={50} duration={3} />}+
                                            </h2>
                                            <h3 className='text-2xl font-semibold text-center tracking-wider'>Clients</h3>
                                            <p className='text-center'>works with us</p>
                                        </div>
                                        <div ref={projectsRef} className='w-full md:w-[200px] mb-4' data-aos="fade-up" data-aos-delay="300">
                                            <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 text-border'>
                                                {projectsInView && <CountUp end={30} duration={3} />}+
                                            </h2>
                                            <h3 className='text-2xl font-semibold text-center tracking-wider'>Projects</h3>
                                            <p className='text-center'>Delivered</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 sm:flex-row' data-aos="fade-up" data-aos-delay="200">
                                        <div ref={peopleRef} className='w-full md:w-[200px] mb-4' data-aos="fade-up" data-aos-delay="400">
                                            <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 text-border'>
                                                {peopleInView && <CountUp end={100} duration={3} />}+
                                            </h2>
                                            <h3 className='text-2xl font-semibold text-center tracking-wider'>People</h3>
                                            <p className='text-center'>Delivering solutions</p>
                                        </div>
                                        <div ref={developersRef} className='w-full md:w-[200px] mb-4' data-aos="fade-up" data-aos-delay="500">
                                            <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 text-border'>
                                                {developersInView && <CountUp end={10} duration={3} />}+
                                            </h2>
                                            <h3 className='text-2xl font-semibold text-center tracking-wider'>Developers</h3>
                                            <p className='text-center'>That works with us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutcom2;
