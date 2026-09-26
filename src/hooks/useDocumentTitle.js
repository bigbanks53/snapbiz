import { useEffect } from 'react'

/** Title declared in index.html — restored whenever a page unmounts. */
export const BASE_TITLE = 'SnapBiz — From Idea to Business'

/**
 * Keeps `document.title` in sync with the active route so the browser tab
 * (and history entries) match what is actually on screen.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = BASE_TITLE
    }
  }, [title])
}
