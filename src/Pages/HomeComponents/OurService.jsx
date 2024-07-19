import React from "react";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <div className="w-full h-auto mt-10">
      <div>
        <h1 className="text-xl font-bold">Try our Services <span className="text-red-400">Now..</span></h1>
        <p>Contact our customer support</p>
      </div>
      <div>
        <h1 className="text-sm font-bold text-amber-600">Click here</h1>
        <button><Link to="/contact">Contact Us</Link></button>
        {/* <button></button> */}
      </div>
    </div>
  );
};

export default OurService;
