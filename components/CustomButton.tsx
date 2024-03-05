'use client'
import React from 'react'

import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({
  title,
  containerStyles,
  handledClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
