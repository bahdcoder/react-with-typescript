import React, { useState } from 'react'
import { useDebounce } from 'use-debounce'

import { FiltersContext } from '../context/filters'

export const FiltersWrapper = ({ children }) => {
  const [showingFilters, setShowingFilters] = useState(false)
  const [search, setSearch] = useState('')

  const [debouncedSearch] = useDebounce(search, 500)

  const toggleBodyScrollBehaviour = () => {
    if (showingFilters) {
      document.body.style.overflow = 'scroll'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        showingFilters,
        debouncedSearch,
        toggleShowingFilters: () => {
          toggleBodyScrollBehaviour()

          setShowingFilters((showing) => !showing)
        },
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
