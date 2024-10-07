import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import resume from '../images/Revanth_latest_Resume.pdf'; 

// Animation Styles
const styles = {
  entrance: {
    animation: 'fadeIn 1s ease-in-out forwards',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)', // Slight upward movement
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)', // Move to original position
    },
  },
};

const texts = [
  'LeetCode Knight',
  'GFG Campus Ambassador',
  'RGUKTIAN',
];

const HeroSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClickOpen = () => {
    window.open(resume, '_blank'); // Open resume in a new tab
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        ...styles.entrance, // Apply entrance animation styles
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
        Hi, I'm <span style={{ color: '#FF5733' }}>J.Revanth Kumar</span>
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        {texts[visibleIndex]}
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ marginBottom: '2rem' }}>
        {[
          { icon: <LinkedInIcon fontSize="large" />, link: "https://www.linkedin.com/in/jilakararevanthkumar/", color: '#0077b5' },
          { icon: <FacebookIcon fontSize="large" />, link: "https://www.facebook.com/jilakara.revanthkumar", color: '#1877f2' },
          { icon: <GitHubIcon fontSize="large" />, link: "https://github.com/revanthkumarJ", color: 'white' },
          { icon: <InstagramIcon fontSize="large" />, link: "https://www.instagram.com/revanth_kumar_j", color: '#E1306C' },
        ].map(({ icon, link, color }, index) => (
          <IconButton
            key={index}
            sx={{
              margin: '0 1rem',
              color: 'white', // Set initial icon color to white
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                color: color, // Change color on hover
                transform: 'scale(1.2)', // Slightly increase size on hover
              },
            }}
            href={link}
            target="_blank"
          >
            {icon}
          </IconButton>
        ))}
      </Box>

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        View Resume
      </Button>
    </Box>
  );
};

export default HeroSection;
