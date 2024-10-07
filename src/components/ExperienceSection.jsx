import React from 'react';
import { Box, Typography } from '@mui/material';
import src from "../images/SRC.jpeg"; // Import your logo/image
import gfg from "../images/gfg.webp"

const experienceData = [
  {
    jobTitle: 'GFG Campus Ambassador',
    company: 'GeeksforGeeks (GFG)',
    location: 'Remote',
    dates: 'April 2024 - Present',
    description: 'Improved the coding community within the college by organizing and promoting coding events. Promoted GFG blogs and free opportunities among peers, boosting engagement.',
    logo: gfg,
  },
  {
    jobTitle: 'DSA Coordinator and Social Media Manager',
    company: 'SRC, CSE Department, RGUKT, RK Valley',
    dates: 'April 2024 - Present',
    description: 'Coordinated and managed student club activities, particularly in Data Structures and Algorithms (DSA). Managed the club’s social media presence, increasing online engagement and activity.',
    logo: src,
  },
  {
    jobTitle: 'Member of Strivers 2 Batch at SRC',
    company: 'SRC, CSE Department, RGUKT, RK Valley',
    dates: 'September 2024 - Present',
    description: 'Building a finance website with a team, collaborating on both frontend and backend using React and Express. Currently developing a finance API that processes bank statements, manages data uploads, and allows for individual data handling, including filtering and more.',
    logo: src,
  }
];

const ExperienceSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        Experience
      </Typography>
      <Box>
        {experienceData.map((experience, index) => (
          <Box key={index} sx={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={experience.logo}
              alt={experience.company}
              sx={{
                width: '50px', // Adjust logo size
                height: '50px',
                marginRight: '1rem', // Space between logo and text
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                {experience.jobTitle}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {experience.company}
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>
                  {experience.location} {/* Show location if available */}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
                {experience.dates}
              </Typography>
              <Typography variant="body2" sx={{ overflowWrap: 'break-word' }}>
                {experience.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceSection;
