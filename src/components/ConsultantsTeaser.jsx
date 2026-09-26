import { Link } from 'react-router-dom'
import { ArrowRight, BriefcaseBusiness, Sparkles, UserRound } from 'lucide-react'

export default function ConsultantsTeaser() {
  return (
    <section
      id="consultants-teaser"
      aria-labelledby="consultants-teaser-title"
      className="relative overflow-hidden bg-forest py-16 text-ivory sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl justify-center px-5 sm:px-8">
        <div className="flex w-full max-w-[40rem] min-w-0 flex-col rounded-[2rem] border border-ivory/15 bg-forest-deep/60 p-6 sm:p-8 lg:p-10">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
            <Sparkles size={15} aria-hidden="true" />
            Meet a consultant
          </p>
          <h2
            id="consultants-teaser-title"
            className="mt-5 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl"
          >
            Sometimes you need <span className="text-lime">a person</span>, not another article.
          </h2>
          <p className="mb-7 mt-5 text-base leading-relaxed text-ivory/70">
            As SnapBiz evolves, you&apos;ll be able to connect with professional consultants, including lawyers, for personalized guidance.
          </p>

          <div className="mt-auto">
            <div className="rounded-2xl border border-ivory/10 bg-forest p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/50">
                  Experience preview
                </p>
                <span className="rounded-full border border-lime/20 bg-lime/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ivory/10 text-ivory/80">
                  <UserRound size={21} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Alex Morgan</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ivory/60">
                    <BriefcaseBusiness size={13} aria-hidden="true" />
                    Consultant profile preview
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-lime/20 bg-lime/5 px-3 py-1.5 text-[11px] font-medium text-lime/90">
                  Legal guidance
                </span>
                <span className="rounded-full border border-ivory/10 bg-ivory/5 px-3 py-1.5 text-[11px] font-medium text-ivory/65">
                  Business setup
                </span>
              </div>
            </div>
            <Link
              to="/consultants"
              className="group mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-5 py-3 font-display text-sm font-bold text-forest-deep transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-base"
            >
              Explore Consultants
              <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
