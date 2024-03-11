import { CarProps } from '@/types'
import React from 'react'

interface carDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CardDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return <div></div>
}

export default CardDetails
