import React from 'react'
import './More.css'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const More = () => {
  return (
    <div className='More'>
        <h1 className='mainHeading'>Our Services</h1> 
        <div className='moreSection'>
            <div className='moreContentDeliveryIcon'>
                <DeliveryDiningIcon style={{color:"white",fontSize:'240px'}} />
            </div>
            <div className='moreContentRestaurantIcon'>
                 <RestaurantIcon style={{color:"white",fontSize:'190px'}} />
            </div>
        </div>
    </div>
  )
}

export default More
