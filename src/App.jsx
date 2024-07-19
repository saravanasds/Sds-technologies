// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import ServicesComponent from './Pages/Services';
import ServiceDetail from './Pages/ServiceComponents/ServiceDetails';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Layout from './Components/Layout';
import Loading from './Components/Loading'; // Import the Loading component


// 

import Web from './Pages/CourseDetails/Web'
import App1 from './Pages/CourseDetails/App1'
import Ai from './Pages/CourseDetails/Ai'
import CAD from './Pages/CourseDetails/CAD'
import DMO from './Pages/CourseDetails/DMO'
import MLP from './Pages/CourseDetails/MLP'
import CCA from './Pages/CourseDetails/CCA'
import COA from './Pages/CourseDetails/COA'
import Tally from './Pages/CourseDetails/Tally'


import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });

    // Simulate a loading delay (you can replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesComponent />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />

        {/*  */}

        <Route path="Web" element={<Web />}/>
        <Route path="App1" element={<App1/>}/>
        <Route path="Ai" element={<Ai />}/>
        <Route path="CAD" element={<CAD />}/>
        <Route path="DMO" element={<DMO />}/>
        <Route path="MLP" element={<MLP />}/>
        <Route path="CCA" element={<CCA />}/>
        <Route path="COA" element={<COA/>}/> 
        <Route path="Tally" element={<Tally />}/>
        

      </Route>
    </Routes>
  );
}

export default App;
