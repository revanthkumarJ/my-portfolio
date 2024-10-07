import React from 'react';
import { Box, Typography } from '@mui/material';

import image from "../images/html.webp"; // Replace this with your actual profile image path
import html from "../images/html.webp"
import css from "../images/css.webp"
import bootstrap from "../images/bootstrap.jpg"
import materialUI from "../images/materialUI.png"
import react from "../images/react.png"
import kotlin from "../images/kotlin.png"

import expressImg from "../images/ExpressJS.jpg"

import mongodb from "../images/mongodb_img.png"
import mysql from "../images/mysql.jpg"

import java from "../images/java.jpg"
import c from "../images/c.jpg"
import python from "../images/python.png"

import postman from "../images/postman.jpg"
import git from "../images/git_img.jpg"
import github from "../images/github.jpg"




const skillsData = {
  Frontend: [
    { name: 'HTML', image:html },
    { name: 'CSS',image: css },
    { name: 'Bootstrap', image:bootstrap },
    { name: 'Material UI', image:materialUI },
    { name: 'React', image:react },
    { name: 'Kotlin',image: kotlin }, // Kotlin added to Frontend skills
  ],
  Backend: [
    { name: 'Express.js', image:expressImg },
  ],
  Database: [
    { name: 'MongoDB', image:mongodb },
    { name: 'MySQL', image:mysql },
  ],
  Languages: [
    { name: 'Java', image:java },    // Added Java
    { name: 'C', image:c },       // Added C
    { name: 'Python', image:python },  // Added Python
  ],
  Others: [
    { name: 'Postman', image:postman },
    { name: 'Git', image:git },
    { name: 'GitHub', image:github },
  ],
};

// Subcomponent for displaying individual skills
const SkillItem = ({ skill }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.1)', // Scale on hover
        boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)', // Shadow effect on hover
      },
    }}
  >
    <img
      src={skill.image}
      alt={skill.name}
      style={{
        width: '60px', // Set the size of the images
        height: '60px',
        borderRadius: '50%', // Rounded corners for a softer look
      }}
    />
    <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '0.5rem' }}>
      {skill.name}
    </Typography>
  </Box>
);

// Main SkillsSection component
const SkillsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px', // Rounded corners for the section
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)', // Shadow for depth
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        Skills
      </Typography>
      {Object.entries(skillsData).map(([category, skills]) => (
        <Box key={category} sx={{  display: 'flex',
            flexDirection: 'row',alignItems: 'center' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold' }}>
            {category}:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap', // Allow items to wrap onto multiple lines
              justifyContent: 'center', // Center items
            }}
          >
            {skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsSection;
