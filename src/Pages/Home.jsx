import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <Layout>
      <div 
        className="home" 
        style={{
          backgroundImage: `url(foodbackground.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="headerContainer">
          <h6>Your belly knows best</h6>
          <Stack spacing={2} direction="row">
          <Button component={Link}
          to="/menu"
          variant="outlined"
          sx={{
          borderColor: 'black',
          backgroundColor: 'black',
          color: 'white',
        '&:hover': {
          borderColor: 'black',
          color: 'white'
        }
        }}>Order Now</Button>
          </Stack>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;
