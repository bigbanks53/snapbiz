import { useEffect } from 'react'
import IdeaHero from '../components/IdeaHero'
import IdeaJourney from '../components/IdeaJourney'
import IdeaExample from '../components/IdeaExample'
import IdeaClosing from '../components/IdeaClosing'

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
