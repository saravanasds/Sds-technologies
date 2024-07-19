import React from 'react';
import insta from "../../../assets/insta.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DigitalMarketing = () => {
  const plans = [
    {
      title: 'Instagram Plan',
      content: [
        '30 Posts in Instagram Page',
        '30 Poster Designs Offer',
        'Minimum 10k Views per Post',
        'Instagram Analytics Report',
        'Organic Business Leads',
        '30 Days Money-Back Guarantee',
      ],
      image: insta,
    },
    {
      title: 'Facebook Plan',
      content: [
        '30 Posts in Facebook Page',
        '30 Poster Designs Offer',
        'Minimum 5k Likes per Post',
        'Facebook Analytics Report',
        'Organic Business Leads',
        '30 Days Money-Back Guarantee',
      ],
      image: facebook,
    },
    {
      title: 'Twitter Plan',
      content: [
        '30 Tweets in Twitter Account',
        '30 Poster Designs Offer',
        'Minimum 2k Retweets per Post',
        'Twitter Analytics Report',
        'Organic Business Leads',
        '30 Days Money-Back Guarantee',
      ],
      image: twitter,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 md:flex-row md:flex-wrap gap-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="w-full flex flex-col lg:flex-row justify-center items-center bg-black shadow-lg rounded-lg p-6 py-10 m-4 gap-8 lg:gap-20"
        >
          <div className='w-full lg:w-[50%] flex justify-center lg:justify-end items-center'>
            <img src={plan.image} alt="" className='w-[70%] sm:w-[40%] lg:w-[50%] xl:w-[40%] animate-bounceSlow'/>
          </div>

          <div className='w-full lg:w-[50%] flex flex-col justify-center lg:justify-start items-center lg:items-start'>
            <h3 className="text-3xl font-bold mb-6 tracking-wider">{plan.title}</h3>
            <ul className="mb-4">
              {plan.content.map((item, idx) => (
                <li key={idx} className="mb-4 text-white flex items-start gap-2 text-md sm:text-xl tracking-wider">
                  <span className="text-blue-400 mt-[5px]"><IoMdCheckmarkCircleOutline /></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DigitalMarketing;
