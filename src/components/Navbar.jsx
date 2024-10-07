// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer open/close

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }} // Set the width of the drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h6" sx={{ padding: '16px', fontWeight: 'bold', textAlign: 'center' }}>
        JILAKARA REVANTH KUMAR PORTFOLIO
      </Typography>
      <Button color="inherit" component={Link} to="/" fullWidth sx={{ justifyContent: 'start' }}>Home</Button>
      <Button color="inherit" component={Link} to="/projects" fullWidth sx={{ justifyContent: 'start' }}>Projects</Button>
      <Button color="inherit" component={Link} to="/certifications" fullWidth sx={{ justifyContent: 'start' }}>Certifications</Button>
      <Button color="inherit" component={Link} to="/about" fullWidth sx={{ justifyContent: 'start' }}>About Me</Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1e1e1e' }}> {/* Dark background */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
          JILAKARA REVANTH KUMAR PORTFOLIO
        </Typography>

        {/* Hamburger menu icon for small screens */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Buttons for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Home</Button>
          <Button color="inherit" component={Link} to="/projects" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Projects</Button>
          <Button color="inherit" component={Link} to="/certifications" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Certifications</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ padding: '10px 20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>About Me</Button>
        </Box>
      </Toolbar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
