import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function ProjectCard({ image, name, description, technologies, frontendLink, backendLink, videoLink }) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to bottom right, #0f0f0f, #1a1a2e, #16213e, #0f3460)', // Enhanced gradient background
        color: '#ffffff', // Light text color
        elevation: 3, // Add elevation for depth
        height: '100%' // Make sure the card takes full height within the grid
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
          {name}
        </Typography>
        <CardMedia
          component="img"
          width="100%" // Set image width to 100% of the card
          image={image}
          alt={name}
          sx={{
            objectFit: 'contain',
            // Add padding around the image
            margin: '0 auto' // Center the image
          }}
        />
        <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>
          {description}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
          Technologies Used:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {technologies.map((tech, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                margin: '0 5px',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#003366',
                padding: '4px 8px',
                borderRadius: '5px',
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px' }}>
          {frontendLink && (
            <Button
              size="small"
              onClick={() => window.open(frontendLink, '_blank')}
              sx={{
                backgroundColor: '#9B59B6',
                color: '#ffffff',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#003366',
                },
              }}
            >
              Frontend
            </Button>
          )}
          {backendLink && (
            <Button
              size="small"
              onClick={() => window.open(backendLink, '_blank')}
              sx={{
                backgroundColor: '#6A5ACD',
                color: '#ffffff',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#003366',
                },
              }}
            >
              Backend
            </Button>
          )}
          {videoLink && (
            <Button
              size="small"
              onClick={() => window.open(videoLink, '_blank')}
              sx={{
                backgroundColor: '#2980B9',
                color: '#ffffff',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#003366',
                },
              }}
            >
              Video
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
