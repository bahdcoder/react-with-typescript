import { useEffect } from 'react'
import elementContains from 'document.contains'

const useOutsideClick = (elementRef, handleOutsideClick) => {
  useEffect(() => {
    const clickEventListener = (event) => {
      if (!elementContains(elementRef.current, event.target)) {
        handleOutsideClick(event)
      }
    }

    document.addEventListener('click', clickEventListener, true)

    return () => document.removeEventListener('click', clickEventListener, true)
  }, [elementRef, handleOutsideClick])
}

export default useOutsideClick
