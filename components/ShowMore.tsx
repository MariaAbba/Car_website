'use client'

import React from 'react'
import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import CustomButton from './CustomButton'

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handledClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
