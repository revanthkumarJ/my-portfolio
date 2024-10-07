import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import profile from "../images/profile.jpeg";
import kotlin from "../images/kotlin.png"
import react from "../images/react.png"
import html from "../images/html.webp"
import css from "../images/css.webp"
import java from "../images/java.jpg"
import c from "../images/c.jpg"
import git from "../images/git_img.jpg"
import github from "../images/github.jpg"
import postman from "../images/postman.jpg"
import expressimg from "../images/ExpressJS.jpg"


// Example array of image URLs (replace these with your actual image paths)
const techImages = [
  { name: 'Kotlin', image: kotlin},
  { name: 'React', image: react },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Java', image: java },
  { name: 'C', image: c },
  { name: 'Git', image: git },
  { name: 'GitHub', image: github },
  { name: 'Postman', image: postman },
  { name: 'Express', image: expressimg },
];

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundColor: 'black',
        color: 'white',
        width: '100vw', // Full width
        minHeight: '400px', // Ensures minimum height
        boxSizing: 'border-box', // Ensures padding is contained within
      }}
    >
      {/* Left Side: Text with 70% width */}
      <Box sx={{ flex: '0 0 60%', padding: '1rem', textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am J.Revanth currently studying E3 CSE at RGUKT RKValley, with strong expertise in DSA through Java and currently focusing on learning native Android development and Express backend. Hobbies are playing badminton, surfing LinkedIn, playing chess, etc. Actively involved in college SRC club activities and outside organization activities like GFG as a campus ambassador.
        </Typography>

        {/* Technologies Known Heading */}
        <Typography variant="h5" gutterBottom>
          Technologies Known
        </Typography>

        {/* Technology icons/images */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {techImages.map((tech, index) => (
            <Avatar
              key={index}
              alt={tech.name}
              src={tech.image}
              sx={{
                width: 50,
                height: 50,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Right Side: Profile Image with 30% width */}
      <Box sx={{ flex: '0 0 40%', textAlign: 'center', padding: '1rem' }}>
        <Avatar
          alt="Revanth Kumar"
          src={profile} // Replace with your actual profile picture path
          sx={{
            width: 300, // Increased width
            height: 300, // Increased height
            margin: 'auto',
            border: '3px solid white', // Add some styling to the image
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;
