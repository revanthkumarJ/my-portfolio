import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Chip } from '@mui/material';
import { GitHub } from '@mui/icons-material'; // Import GitHub icon
import { styled } from '@mui/system';

// Sample projects data
const projects = [
  {
    title: 'SRC Student Club Mobile App',
    description: 'Currently developing a mobile application for the department’s student club, collaborated with a friend, and integrated it with an existing Express backend.',
    technologies: ['Kotlin', 'Jetpack', 'Express'],
    githubLink: 'https://github.com/revanthkumarJ/SRC-Android', // Replace with actual GitHub link
  },
  {
    title: 'Netflix and Instagram UI',
    description: 'Developed user interfaces for Netflix and Instagram using Jetpack Compose, focusing on creating pixel-perfect layouts.',
    technologies: ['Jetpack Compose'],
    githubLink: 'https://github.com/revanthkumarJ/InstaUI', // Replace with actual GitHub link
  },
  {
    title: 'Finance API',
    description: 'Currently developing a finance API that processes bank statements, manages data uploads, and allows for individual data handling, including filtering and more.',
    technologies: ['Node', 'Express', 'TypeScript'],
    githubLink: 'https://github.com/revanthkumarJ/Finance-API', // Replace with actual GitHub link
  },
];

// Styled components for better UI
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1c1c1c', // Darker card background for more black
  color: 'white',
  flexGrow: 1, // Allow card to grow
  padding: '1.5rem',
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)', // Shadow for depth
  margin: '0.5rem', // Margin for spacing between cards
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#24292e', // GitHub button background color
  color: 'white',
  '&:hover': {
    backgroundColor: '#1e1e1e', // Darker shade on hover
  },
  width: '100%', // Make buttons full width for alignment
}));

const ProjectsSection = () => {
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
        My Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Adjusts layout based on screen size
          justifyContent: 'center',
          alignItems: 'stretch', // Ensure all cards stretch to the same height
        }}
      >
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                {project.description}
              </Typography>
              <Box sx={{ marginTop: 1 }}>
                {project.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{ margin: '0.25rem', backgroundColor: '#3C3C3C', color: 'white' }}
                  />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <StyledButton size="small" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHub sx={{ marginRight: '0.5rem' }} /> GitHub
              </StyledButton>
            </CardActions>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
