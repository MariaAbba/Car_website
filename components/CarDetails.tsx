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
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative"></Dialog>
      </Transition>
    </>
  )
}

export default CardDetails
