import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '120px', xs: '70px'}, ml:{sm: '50px'}}} position='relative' p='20px'>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: {l: '44px', xs: '40px'}}} mb="23px" mt="30px" >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4} >
          Checkout the most effective exercises.
        </Typography>
        <Stack>
          <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontSize='200px' fontWeight={600} color="#FF2625" sx={{ opacity: 0.1, display: {lg: 'block', xs:'none'}}} >
          Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner