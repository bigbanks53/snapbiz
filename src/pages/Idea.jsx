import IdeaHero from '../components/IdeaHero'
import IdeaJourney from '../components/IdeaJourney'
import IdeaExample from '../components/IdeaExample'
import IdeaClosing from '../components/IdeaClosing'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Idea() {
  useDocumentTitle('I Have an Idea — Preview | SnapBiz')

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
