import ConsultantsHero from '../components/ConsultantsHero'
import ConsultantsProfiles from '../components/ConsultantsProfiles'
import ConsultantsCapabilities from '../components/ConsultantsCapabilities'
import ConsultantsClosing from '../components/ConsultantsClosing'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Consultants() {
  useDocumentTitle('Consultants — Coming Soon | SnapBiz')

  return (
    <div id="consultants-page">
      <main>
        <ConsultantsHero />
        <ConsultantsProfiles />
        <ConsultantsCapabilities />
        <ConsultantsClosing />
      </main>
    </div>
  )
}
