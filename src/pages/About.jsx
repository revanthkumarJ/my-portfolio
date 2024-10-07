import React from 'react';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import AboutUsIntroduction from '../components/AboutUsIntroduction';
import SkillsSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import CodingProfile from '../components/CodingProfiles';
import Achievements from '../components/Achievements';
import Education from '../components/Education';

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      
        <AboutUsIntroduction/>
        <SkillsSection/>
        <ExperienceSection/>
        <CodingProfile/>
        <Achievements/>
        <Education/>
      
    </Box>
  );
};

export default AboutUs;
