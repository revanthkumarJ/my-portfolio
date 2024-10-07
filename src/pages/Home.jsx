// src/pages/Certificates.js
import React from 'react';
import { Typography,Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import Achievements from '../components/Achievements';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectSection';
import CodingProfiles from '../components/HomeCodingprofile';
import Contact from '../components/Contact';

function Certificates() {
  return (
   <Box
   sx={{
     backgroundColor: 'black',
     color: 'white',
     minHeight: '100vh',
     padding: '2rem',
   }}>
    <HeroSection/>
    <AboutSection/>
    <CodingProfiles/>
    <ExperienceSection/>
    
    <ProjectsSection/>
    
    <Achievements/>
    <Contact/>

  </Box>

  );
}

export default Certificates;
