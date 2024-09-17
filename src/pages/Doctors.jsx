import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p>Browse through the doctors speciality.</p>
    </div>
    
  )
}

export default Doctors