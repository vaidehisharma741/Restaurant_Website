import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon  from '@mui/icons-material/Instagram'; 
import Facebook  from '@mui/icons-material/Facebook'; 
import Twitter  from '@mui/icons-material/Twitter'; 

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 2, mt: 'auto', textAlign: 'center' }}>
        <Box sx={{
            "& svg":
            {
                mr:2,
                fontSize:"30px",
                cursor:"pointer"
            },
            "& svg:hover":
            {
                transform:"translateX(4px)",
                transition:"all 400ms"
            }
        }}>
            <InstagramIcon/>
            <Facebook/>
            <Twitter/>
        </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
