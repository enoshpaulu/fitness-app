import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExercise from '../Components/SearchExercise'
import Exercises from '../Components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home