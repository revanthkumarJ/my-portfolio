import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import PreviewDialog from './PreviewDialog'; // Import the PreviewDialog component

function CertificateCard({ image, name, issuedBy, issuedOn, verifyLink }) {
  const [open, setOpen] = useState(false); // State for dialog open/close

  const handlePreviewOpen = () => {
    setOpen(true);
  };

  const handlePreviewClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ 
        // Set responsive width and add margin for spacing
        width: '100%', 
       
        background: 'linear-gradient(to bottom right, #0f0f0f, #1a1a2e, #16213e, #0f3460)', // Enhanced gradient background
        color: '#ffffff', // Light text color
        elevation: 3 // Add elevation for depth
      }}>
        <CardMedia 
          component="img" 
          width="90%" // Set image width to 90% of the card
          image={image} 
          alt={name} 
          sx={{ 
            objectFit: 'contain', 
            padding: '16px', // Add padding around the image
            margin: '0 auto' // Center the image
          }} 
        />
        <CardContent sx={{ textAlign: 'center' }}> {/* Center text below image */}
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Issued By: </Typography>
            <Typography variant="body2" sx={{ marginLeft: '5px', fontFamily: 'Arial, sans-serif' }}>
              {issuedBy}
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Issued On: </Typography>
            <Typography variant="body2" sx={{ marginLeft: '5px', fontFamily: 'Arial, sans-serif' }}>
              {issuedOn}
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
            <Button 
              size="small" 
              onClick={handlePreviewOpen} 
              sx={{ 
                backgroundColor: '#9B59B6     ', 
                color: '#ffffff', 
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#003366', // Darker blue on hover
                },
              }}
            >
              Preview
            </Button>
            <Button 
              size="small" 
              onClick={() => window.open(verifyLink, '_blank')} 
              sx={{ 
                backgroundColor: '#6A5ACD ', 
                color: '#ffffff', 
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: '#003366', // Darker blue on hover
                },
              }}
            >
              Verify
            </Button>
          </div>
        </CardContent>
      </Card>
      <PreviewDialog open={open} onClose={handlePreviewClose} image={image} text={name} />
    </>
  );
}

export default CertificateCard;
