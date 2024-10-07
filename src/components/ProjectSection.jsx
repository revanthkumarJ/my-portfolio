import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub icon

// Sample projects data
const projects = [
  {
    title: 'SRC Student Club Mobile App',
    description: 'Currently developing a mobile application for the department’s student club, collaborated with a friend, and integrated it with an existing Express backend.',
    technologies: ['Kotlin', 'Jetpack', 'Express'],
    githubLink: 'https://github.com/your-github-username/src-student-club-app', // Replace with actual GitHub link
  },
  {
    title: 'Netflix and Instagram UI',
    description: 'Developed user interfaces for Netflix and Instagram using Jetpack Compose, focusing on creating pixel-perfect layouts.',
    technologies: ['Jetpack Compose'],
    githubLink: 'https://github.com/your-github-username/netflix-instagram-ui', // Replace with actual GitHub link
  },
  {
    title: 'Finance API',
    description: 'Currently developing a finance API that processes bank statements, manages data uploads, and allows for individual data handling, including filtering and more.',
    technologies: ['Node', 'Express', 'TypeScript'],
    githubLink: 'https://github.com/your-github-username/finance-api', // Replace with actual GitHub link
  },
];

// Styled components for better UI
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#000000', // Darker card background for more black
  color: 'white',
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Added shadow for depth
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8], // Increase shadow on hover
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#24292e', // GitHub button background color
  color: 'white',
  '&:hover': {
    backgroundColor: '#1e1e1e', // Darker shade on hover
  },
  width: '100%', // Make buttons full width for alignment
  justifyContent: 'center',
}));

const ProjectsSection = () => {
  return (
    <Box sx={{ padding: '4rem', backgroundColor: '#121212', color: 'white' }}> {/* Black shade for background */}
      <Typography variant="h3" sx={{ marginBottom: '2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center' }}>
        My Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {projects.map((project, index) => (
          <StyledCard key={index} sx={{ width: '30%', margin: '1rem' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Verdana, sans-serif', lineHeight: 1.5 }}>
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
              <StyledButton size="small" href={project.githubLink} target="_blank">
                <GitHubIcon sx={{ marginRight: '0.5rem' }} /> GitHub
              </StyledButton>
            </CardActions>
          </StyledCard>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', padding: '1rem 2rem', color: 'white', borderColor: 'white' }} // Increased size
          href="/projects" // Replace with the actual route to your projects page
        >
          See All Projects
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
