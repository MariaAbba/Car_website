'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { SearchManufacturer } from '.'
import Image from 'next/image'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

const SearchBar = ({setManufacturer, setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = React.useState('')
  const [searchModel, setSearchModel] = React.useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car searchModel"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="type"
          name="searchModel"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
