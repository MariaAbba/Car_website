'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { CarProps } from '@/types'
import CustomButton from './CustomButton'

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, make, model, transmission, year } = car
  return <div>CarCard</div>
}

export default CarCard

// class,
// combination_mp,
// cylinder,
// displacement,
// fuel_type,
// highway_mp,
