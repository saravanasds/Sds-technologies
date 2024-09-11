import React from 'react';

import Test1 from "../../assets/test-market.png"
import Test2 from "../../assets/test-cource.png"
import Test3 from "../../assets/test-store.png"

function Testimonials() {
    return (
        <div className="bg-gradient-to-r from-black via-[#4d6b9c82] to-black rounded-lg flex flex-col items-center justify-center max-h-auto sm:p-10 pt-20" data-aos="flip-up" data-aos-delay="800">
            <h2 className="text-2xl sm:text-4xl tracking-wider font-semibold text-center text-white mb-8 sm:mb-16">What you are Looking for?</h2>
            <div className="grid gap-6 lg:grid-cols-3 mb-8">

                {/* Card 1 */}
                <div className="relative text-white sm:p-[20px] rounded-lg  border-[1px] border-gray-500 transform transition-all " data-aos="slide-right" data-aos-delay="3000" style={{boxShadow: '0 0 4px #4D6B9C'}}>

                    <div className="absolute inset-0 w-full h-full rounded-lg p-[1px] pointer-events-none"></div>

                    <div className="relative flex flex-col justify-between rounded-lg z-10 h-full p-4 hover:bg-transparent transition-colors duration-300 ease-in-out">
                        <div>
                        <p className="text-xl sm:text-2xl  font-semibold mb-2">Our Services</p>
                        <p className=" mb-4 text-gray-300">"We're here to empower your digital journey." we strive to help businesses thrive in the digital age.</p>
                        </div>
                        <div className="flex items-center bg-gradient-to-r from-[#4D6B9C] via-gray-900 to-transparent rounded-[30px] ">
                            <img src={Test1} alt="Sam Wilson" className="w-14 h-14 rounded-full border-2 border-black sm:mr-4 mr-2" />
                            <div>
                                <p className="text-sm font-medium ">Digital Platform</p>
                                <p className="text-sm ">Explore more</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative text-white sm:p-[20px] rounded-lg shadow-lg border-[1px] border-gray-500 transform transition-all" data-aos="slide-up" data-aos-delay="3000" style={{boxShadow: '0 0 4px #4D6B9C'}}>

                    <div className="absolute inset-0 w-full h-full rounded-lg p-[1px] pointer-events-none"></div>

                    <div className="relative flex flex-col justify-between rounded-lg z-10 h-full p-4 hover:bg-transparent transition-colors duration-300 ease-in-out">
                        <div>
                        <p className="text-xl sm:text-2xl font-semibold mb-2">Our Courses</p>
                        <p className=" mb-4 text-gray-300">"Empowering tomorrow's innovators through cutting-edge IT education."</p>
                        </div>
                        <div className="flex items-center bg-gradient-to-r from-[#4D6B9C] via-gray-900 to-transparent rounded-[30px]">
                            <img src={Test2} alt="Sam Wilson" className="w-14 h-14 rounded-full border-2 border-black sm:mr-4 mr-2" />
                            <div>
                                <p className="text-sm font-medium ">Educational Platform</p>
                                <p className="text-sm ">Explore Courses</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative text-white sm:p-[20px] rounded-lg shadow-lg border-[1px] border-gray-500 transform transition-all" data-aos="slide-left" data-aos-delay="3000" style={{boxShadow: '0 0 4px #4D6B9C'}}>

                    <div className="absolute inset-0 w-full h-full rounded-lg p-[1px] pointer-events-none"></div>

                    <div className="relative flex flex-col justify-between rounded-lg z-10 h-full p-4 hover:bg-transparent transition-colors duration-300 ease-in-out">
                        <div>
                        <p className="text-xl sm:text-2xl font-semibold mb-2">Our Store</p>
                        <p className=" mb-4 text-gray-300">"Fantastic experience! The project was handled with great professionalism and expertise."</p>
                        </div>

                        <div className="flex items-center bg-gradient-to-r from-[#4D6B9C] via-transparent to-transparent rounded-[30px]">
                            <img src={Test3} alt="Sam Wilson" className="w-14 h-14 rounded-full border-2 border-black sm:mr-4 mr-2" />
                            <div>
                                <p className="text-sm font-medium ">Nammapalani Application</p>
                                <p className="text-sm ">Online Store</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;
