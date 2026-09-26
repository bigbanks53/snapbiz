import { useEffect } from 'react'
import IdeaHero from './IdeaHero'
import IdeaJourney from './IdeaJourney'
import IdeaExample from './IdeaExample'
import IdeaClosing from './IdeaClosing'

const HOME_TITLE = 'SnapBiz — From Idea to Business'
const IDEA_TITLE = 'I Have an Idea — Preview | SnapBiz'

export default function IdeaPage() {
  useEffect(() => {
    document.title = IDEA_TITLE
    return () => {
      document.title = HOME_TITLE
    }
  }, [])

  return (
    <div id="idea-page">
      <main>
        <IdeaHero />
        <IdeaJourney />
        <IdeaExample />
        <IdeaClosing />
      </main>
    </div>
  )
}
