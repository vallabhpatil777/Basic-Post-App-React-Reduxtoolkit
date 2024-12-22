import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAddPostClick = () => {
    navigate('/add-post');
  };

  return (
    <AppBar position="static" sx={{ marginBottom: 2 , backgroundColor: "lightblue", color:'black'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Post Application
        </Typography>
        <Button onClick={handleHomeClick} color="inherit">
          Home
        </Button>
        <Button onClick={handleAddPostClick} color="inherit">
          Add Post
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
