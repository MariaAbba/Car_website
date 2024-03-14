import React, { Fragment } from 'react'
import Image from 'next/image'

import { Dialog, Transition } from '@headlessui/react'

import { CarProps } from '@/types'

interface carDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CardDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return <div></div>
}

export default CardDetails
