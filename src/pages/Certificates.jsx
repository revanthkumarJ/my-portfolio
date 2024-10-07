import React, { useState } from 'react';
import { Typography, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ImportantCertificates from './ImportantCertificates';
import AllCertificates from './AllCertificates';

function Certificates() {
  // State to manage selected certificate type
  const [selectedCertificateType, setSelectedCertificateType] = useState('all');

  // Handler for radio button change
  const handleCertificateTypeChange = (event) => {
    setSelectedCertificateType(event.target.value);
  };

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        backgroundColor: '#121212', // Dark background
        color: '#ffffff' // Light text color
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginBottom: '20px' }}>
        {selectedCertificateType === 'important' ? 'Important Certifications' : 'All Certifications'}
      </Typography>
      
      {/* Radio buttons to select certificate type */}
      <RadioGroup 
        row 
        value={selectedCertificateType} 
        onChange={handleCertificateTypeChange}
        sx={{ marginBottom: '20px' }} // Add some margin for spacing
      >
        <FormControlLabel 
          value="important" 
          control={<Radio sx={{ color: '#ffffff' }} />} 
          label="Important Certificates" 
        />
        <FormControlLabel 
          value="all" 
          control={<Radio sx={{ color: '#ffffff' }} />} 
          label="All Certificates" 
        />
      </RadioGroup>

      {/* Conditional rendering based on selected certificate type */}
      {selectedCertificateType === 'important' ? <ImportantCertificates /> : <AllCertificates />}
    </Box>
  );
}

export default Certificates;
