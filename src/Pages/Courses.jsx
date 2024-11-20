import React from 'react';
import CourseDetails from './Coursecomponent/CourseDetails.jsx'
import CourseDetails1 from './Coursecomponent/CourseDetails1.jsx'
import CourseDetails2 from './Coursecomponent/CourseDetails2.jsx';
import CourseDetails3 from './Coursecomponent/CourseDetails3.jsx';
import CourseDetails4 from './Coursecomponent/CourseDetails4.jsx';
import CourseDetails6 from './Coursecomponent/CourseDetails6.jsx';
import CourseDetails7 from './Coursecomponent/CourseDetails7.jsx';

import { Helmet } from "react-helmet";


function Courses() {
  return (
<>
      <Helmet>
        <title>Courses | SDS Technologies</title>
        <meta name="description" content="Explore SDS Technologies' courses in web development, app development, AI, and more, with valid certifications." />
        <meta name="keywords" content="web development courses Palani, app development, AI courses, certification courses Palani" />
      </Helmet>

      {/*  */}
<div className='overflow-hidden bg-black'>
      <CourseDetails/>
      <CourseDetails1/>
      <CourseDetails2/>
      <CourseDetails3/>
      <CourseDetails4/>
      <CourseDetails6/>
      <CourseDetails7/>
    </div>
</>
  );
}

export default Courses;
