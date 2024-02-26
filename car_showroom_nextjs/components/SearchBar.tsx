"use client"

import SearchManufacturer from "./SearchManufacturer"
import { useState } from "react"

const SearchBar = () => {
    const [manu,setManu]=useState("")

    const handleSearch=()=>{

        }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manu={manu} 
            setManu={setManu}

            />
        </div>

    </form>
  )
}

export default SearchBar