import React from 'react'

const defaultFilterContext = {
  search: '',
  showingFilters: false,
  debouncedSearch: '',
  setSearch: () => {},
  toggleShowingFilters: () => {},
}

export const FiltersContext = React.createContext(
  defaultFilterContext,
)
