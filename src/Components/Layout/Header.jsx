import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';



export default function SearchAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/services" onClick={handleDrawerToggle}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/menu" onClick={handleDrawerToggle}>
          <ListItemText primary="Menu" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 ,  marginTop: 1}}>
      <AppBar position="static" sx={{ background: '#790000', boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3)' ,color:'white'}}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            {/* <img src="logo.png" height={"40px"} width={"40px"} /> */}
          </IconButton>
          <Hidden smDown>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{ mx: 2, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none' }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/services"
                sx={{ mx: 2, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none'}}
              >
                Services
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/contact"
                sx={{ mx: 2, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none'}}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/menu"
                sx={{ mx: 2, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none'}}
              >
                Menu
              </Typography>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
