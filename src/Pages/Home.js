import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExercise from '../Components/SearchExercise'
import Exercises from '../Components/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])


  return (
    <Box>
      <HeroBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
    </Box>
  )
}

export default Home