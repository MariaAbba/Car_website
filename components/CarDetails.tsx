'use client'

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
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default CardDetails
