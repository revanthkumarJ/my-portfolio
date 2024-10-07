import React from 'react';
import { Box, Typography,Avatar } from '@mui/material';
import { keyframes } from '@mui/system';
import profile from "../images/profile.jpeg"; // Ensure this path is correct

// Define the fade-in animation for text
const fadeInText = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define the fade-in animation for the image
const fadeInImage = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Define the blinking animation
const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const AboutUsIntroduction = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
        justifyContent: 'flex-start', // Align to the top
        alignItems: 'center', // Center items vertically based on image height
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          flex: 1, // Takes available space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center text vertically
          alignItems: 'flex-start', // Align items to the left
          animation: `${fadeInText} 1s ease-in`, // Apply text animation
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: '1rem', color: '#FFD700' }}>
          Hello!
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
          I am <span style={{ color: '#00BFFF', animation: `${blink} 20s infinite` }}>J. Revanth Kumar</span>
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
          Passionate about software development and app development.
        </Typography>
        <Typography variant="h6" align="left" sx={{ maxWidth: '680px' }}>
          Currently studying E3 Computer Science and Engineering at RGUKT RK Valley
          , with strong expertise in DSA through Java and currently focusing on learning native Android development and Express backend.
           Hobbies are playing badminton, surfing LinkedIn, playing chess, etc. Actively involved in college SRC club activities and outside organization activities like GFG as a campus ambassador.
          I have a keen interest in exploring new technologies and building innovative applications.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1, // Takes available space
          display: 'flex',
          justifyContent: 'center', // Center image horizontally
          padding: { xs: '1rem', md: '0' }, // Responsive padding
          animation: `${fadeInImage} 1s ease-in`, // Apply image animation
          marginStart:'100px'
        }}
      >
        <Avatar
              
              alt="Revanth"
              src={profile}
              sx={{
                width: 400,
                height: 400,
              }}
            />
      </Box>
    </Box>
  );
};

export default AboutUsIntroduction;
