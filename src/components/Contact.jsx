import React from 'react';
import { Box, Typography, IconButton, Card, CardContent } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';

const ContactEducation = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark mode background
        color: 'white',
        padding: '2rem',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Contact & Education
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Responsive flex direction
          gap: '2rem', // Space between the two columns
        }}
      >
        {/* Contact Card */}
        <Card
          sx={{
            backgroundColor: '#1c1c1c',
            color: 'white',
            flex: 1,
            padding: '1.5rem',
            boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              Contact Me
            </Typography>
            <Box sx={{ marginBottom: '1rem' }}>
              <IconButton sx={{ color: '#bb001b' }} aria-label="email">
                <Email />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                jrevanth101@gmail.com
              </Typography>
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
              <IconButton sx={{ color: '#4caf50' }} aria-label="phone">
                <Phone />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                +91 9030808053
              </Typography>
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
              <IconButton
                sx={{ color: '#0077b5' }} // LinkedIn Blue
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jilakararevanthkumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                LinkedIn
              </Typography>
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
              <IconButton
                sx={{ color: 'white' }} // GitHub White (for dark background)
                aria-label="GitHub"
                href="https://github.com/revanthkumarJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                GitHub
              </Typography>
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
              <IconButton
                sx={{ color: '#3b5998' }} // Facebook Blue
                aria-label="Facebook"
                href="https://www.facebook.com/jilakara.revanthkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                Facebook
              </Typography>
            </Box>

            <Box>
              <IconButton
                sx={{ color: '#e4405f' }} // Instagram Pink
                aria-label="Instagram"
                href="https://www.instagram.com/revanth_kumar_j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                Instagram
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Education Card */}
        <Card
          sx={{
            backgroundColor: '#1c1c1c',
            color: 'white',
            flex: 1,
            padding: '1.5rem',
            boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              Education
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
              B.Tech in Computer Science and Engineering
            </Typography>
            <Typography variant="body1">RGUKT, RK Valley (2022 - Present)</Typography>
            <Typography variant="body2" sx={{ marginBottom: '1.5rem' }}>
              GPA: 9.12/10
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
              PUC - Pre University Course (MBiPC)
            </Typography>
            <Typography variant="body1">RGUKT, RK Valley (2020 - 2022)</Typography>
            <Typography variant="body2" sx={{ marginBottom: '1.5rem' }}>
              GPA: 9.88/10
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
              High School
            </Typography>
            <Typography variant="body1">AP MODEL SCHOOL,Dharmavaram (2015-2020)</Typography>
            <Typography variant="body2" sx={{ marginBottom: '1.5rem' }}>
              Marks: 582/600
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ContactEducation;
