import LearnHero from '../components/LearnHero'
import LearnCourseGrid from '../components/LearnCourseGrid'
import LearnClosing from '../components/LearnClosing'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Learn() {
  useDocumentTitle('Learn — Coming Soon | SnapBiz')

  return (
    <div id="learn-page">
      <main>
        <LearnHero />
        <LearnCourseGrid />
        <LearnClosing />
      </main>
    </div>
  )
}
