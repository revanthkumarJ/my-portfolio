// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1e1e1e' }}> {/* Dark background */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
          JILAKARA REVANTH KUMAR PORTFOLIO
        </Typography>
        <Button color="inherit" component={Link} to="/my-portfolio" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Home</Button>
        <Button color="inherit" component={Link} to="/projects" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Projects</Button>
        <Button color="inherit" component={Link} to="/certifications" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Certifications</Button>
        <Button color="inherit" component={Link} to="/about" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>About Me</Button>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
