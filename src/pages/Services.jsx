import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Building2, FileCheck2, FileText, Globe2, Landmark, Scale, ShieldCheck, Stamp } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const EASE = [0.22, 1, 0.36, 1]

const SERVICES = [
  {
    title: 'CAC Registration',
    description:
      'Register your business or company with the Corporate Affairs Commission and obtain the required registration documents.',
    icon: Building2,
  },
  {
    title: 'TIN',
    description:
      'Get your Tax Identification Number and the documentation needed to establish your business for tax purposes.',
    icon: FileCheck2,
  },
  {
    title: 'SMEDAN',
    description:
      'Register your business with SMEDAN and obtain your SMEDAN identification certificate.',
    icon: Landmark,
  },
  {
    title: 'Trademark',
    description:
      'Protect your business name, brand identity, logo, or other eligible marks through trademark registration.',
    icon: ShieldCheck,
  },
  {
    title: 'NGO Registration',
    description:
      'Register your NGO or nonprofit organization as an Incorporated Trustee with the appropriate authorities.',
    icon: Scale,
  },
  {
    title: 'SCUML',
    description:
      'Get assistance with SCUML registration and compliance requirements for businesses that fall under its regulatory scope.',
    icon: Stamp,
  },
  {
    title: 'Export-Related Services',
    description:
      'Get assistance with relevant registrations, documentation, and processes for starting or supporting export activities.',
    icon: Globe2,
  },
  {
    title: 'Business Documentation',
    description:
      'Get essential business documents and supporting paperwork prepared for registration, operations, and compliance.',
    icon: FileText,
  },
]

function ServiceCard({ service, index, reduceMotion }) {
  const Icon = service.icon

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.06, ease: EASE }}
      className="group relative flex min-h-[19.5rem] flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ivory p-6 shadow-[0_18px_45px_-30px_rgba(3,40,36,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_24px_50px_-28px_rgba(3,40,36,0.45)] sm:p-7"
    >
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-apricot/10 blur-2xl transition-colors duration-300 group-hover:bg-lime/20"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/[0.08] text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-lime">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-ink/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-7 font-display text-[1.35rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
        {service.title}
      </h3>
      <p className="relative mt-3 text-sm leading-[1.65] text-ink/65">{service.description}</p>

      <button
        type="button"
        className="relative mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-forest transition-colors hover:text-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        Learn More
        <ArrowUpRight
          size={16}
          strokeWidth={2.1}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </motion.article>
  )
}

export default function Services() {
  const reduceMotion = useReducedMotion()

  useDocumentTitle('Services | SnapBiz')

  return (
    <main>
      <section id="services" className="relative overflow-hidden bg-forest text-ivory">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-[110px]" />
          <div className="absolute -bottom-48 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-apricot/10 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-44">
          <div className="lg:col-span-7">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
                Services
              </span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
              className="mt-6 max-w-4xl font-display text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-ivory sm:text-5xl lg:text-[4.15rem]"
            >
              When you&apos;re ready to formalize, we&apos;ve got you covered.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
              className="mt-7 max-w-2xl text-base leading-[1.7] text-ivory/70 sm:text-lg"
            >
              From business registration to documentation and compliance, SnapBiz helps you move from
              planning to formal business setup.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/45"
            >
              <span>Registration</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-lime" />
              <span>Documentation</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-lime" />
              <span>Compliance</span>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:ml-auto"
          >
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-lime/25" />
            <div className="relative overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest-deep/70 p-6 shadow-card backdrop-blur-md sm:p-8">
              <div aria-hidden="true" className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 border-b border-ivory/10 pb-6">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ivory">
                      Formal setup
                    </p>
                    <p className="mt-1 text-xs font-medium text-ivory/45">Services overview</p>
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-lime">08</span>
                </div>

                <div className="mt-7 grid grid-cols-4 gap-2" aria-hidden="true">
                  {SERVICES.map((service, index) => (
                    <span
                      key={service.title}
                      className={`h-2 rounded-full ${index < 4 ? 'bg-lime' : 'bg-ivory/15'}`}
                    />
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  {['Business registration', 'Supporting documents', 'Compliance requirements'].map(
                    (item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-lime/25 bg-lime/10 font-mono text-[10px] font-semibold text-lime">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium text-ivory/70">{item}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-8 border-t border-ivory/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-ivory/45">From planning</span>
                    <ArrowRight size={15} className="text-lime" aria-hidden="true" />
                    <span className="text-right text-xs font-medium text-lime">Formal business setup</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="service-list" aria-labelledby="service-list-heading" className="relative bg-ivory text-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span aria-hidden="true" className="h-px w-10 bg-forest/35" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/65 sm:text-xs">
                What we can help with
              </span>
            </motion.div>
            <motion.h2
              id="service-list-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[3rem]"
            >
              Services for your next formal step.
            </motion.h2>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-cta-heading" className="relative overflow-hidden bg-forest-deep text-ivory">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/25 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-16rem] h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-lime/[0.07] blur-[110px]" />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-8 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime">Talk to us</span>
            <span aria-hidden="true" className="h-px w-8 bg-lime" />
          </motion.div>

          <motion.h2
            id="services-cta-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ivory sm:text-[2.65rem]"
          >
            Not sure which service you need?
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/60 sm:text-base"
          >
            Talk to us, we&apos;ll help you figure out exactly what your business requires.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-8"
          >
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              Get Started
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
