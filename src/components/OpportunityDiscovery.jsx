import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  Wallet,
  Palette,
  Clock,
  MapPin,
  Briefcase,
  RotateCcw,
  ArrowRight,
  Info,
  Check,
  Sliders,
  X,
  ChevronRight,
  Sparkle,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

// Profile parameters specified in user prompt
const PROFILE_DATA = [
  {
    id: 'capital',
    label: 'Capital',
    value: '₦500,000',
    icon: Wallet,
    highlight: true,
    tag: 'Seed Budget',
  },
  {
    id: 'skills',
    label: 'Skills',
    value: 'Graphic Design',
    icon: Palette,
    highlight: false,
    tag: 'Core Skill',
  },
  {
    id: 'experience',
    label: 'Experience',
    value: '2 years',
    icon: Clock,
    highlight: false,
    tag: 'Track Record',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Ibadan',
    icon: MapPin,
    highlight: false,
    tag: 'Oyo State, NG',
  },
  {
    id: 'commitment',
    label: 'Commitment',
    value: 'Full-time',
    icon: Briefcase,
    highlight: false,
    tag: '40+ hrs / week',
  },
]

// Three result cards specified in user prompt
const RESULT_CARDS = [
  {
    id: 'creative-studio',
    title: 'Creative Studio',
    matchScore: 98,
    category: 'Design & Visual Identity',
    capitalRange: '₦350,000 – ₦450,000',
    launchTime: '2 – 3 weeks',
    businessModel: 'Project fees + Retainers',
    description:
      'Low startup overhead. Capital covers essential workstation upgrades, software licensing, and direct marketing to commercial SMEs in Ibadan.',
    highlights: [
      'Fits within your ₦500k capital with reserve buffer',
      'High demand among Ibadan retailers, schools, and tech hubs',
      'Fast turnaround to first revenue (under 30 days)',
    ],
    tags: ['Brand Identity', 'Print & Packaging', 'High Margin'],
    color: 'lime',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Service',
    matchScore: 94,
    category: 'Growth & Social Retainers',
    capitalRange: '₦200,000 – ₦350,000',
    launchTime: '2 – 4 weeks',
    businessModel: 'Monthly recurring retainers',
    description:
      'Package graphic design into recurring social media management, promotional ad creatives, and monthly content bundles for growing businesses.',
    highlights: [
      'Builds predictable monthly cashflow through client contracts',
      'Leverages 2 years design experience into higher-ticket retainers',
      'Can operate remotely or on-site across Ibadan & Lagos',
    ],
    tags: ['Social Content', 'Ad Creatives', 'Monthly Retainers'],
    color: 'lime',
  },
  {
    id: 'brand-agency',
    title: 'Brand & Content Agency',
    matchScore: 91,
    category: 'Strategic Brand Partner',
    capitalRange: '₦400,000 – ₦500,000',
    launchTime: '4 – 6 weeks',
    businessModel: 'High-ticket corporate projects',
    description:
      'Position as a full-service creative partner for emerging brands, combining visual identity, strategic storytelling, and packaging design.',
    highlights: [
      'Maximizes full-time commitment for higher project valuations',
      'Opportunity to collaborate with freelance copywriters & web devs',
      'Scalable agency model with strong expansion potential',
    ],
    tags: ['Brand Strategy', 'Full Service', 'Scalable Agency'],
    color: 'apricot',
  },
]

const MATCHING_CRITERIA = [
  'Calibrating capital threshold: ₦500,000 seed budget',
  'Evaluating Ibadan local commercial SME demand',
  'Cross-referencing 2 years Graphic Design capability',
  'Aligning full-time operational runway',
]

export default function OpportunityDiscovery() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })
  const reduceMotion = useReducedMotion()

  // Steps: 1 = Profile, 2 = Matching, 3 = Results
  const [currentStep, setCurrentStep] = useState(reduceMotion ? 3 : 1)
  const [hasStarted, setHasStarted] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [matchingProgress, setMatchingProgress] = useState(0)

  // Modals & Interactive States
  const [selectedResult, setSelectedResult] = useState(null)
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false)
  const [showProfileDrawer, setShowProfileDrawer] = useState(false)

  // Interactive Customizer for "Discover Your Options"
  const [customCapital, setCustomCapital] = useState('₦500,000')
  const [customSkill, setCustomSkill] = useState('Graphic Design')
  const [customLocation, setCustomLocation] = useState('Ibadan')
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)

  // Timer references for robust cleanup
  const timersRef = useRef([])

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t))
    timersRef.current = []
  }, [])

  const startSequence = useCallback(() => {
    clearAllTimers()
    setIsAutoPlaying(true)
    setCurrentStep(1)
    setMatchingProgress(0)

    // Step 1: Profile card appears for 2.4s
    const t1 = setTimeout(() => {
      setCurrentStep(2)

      // Animate progress smoothly
      let progressVal = 0
      const interval = setInterval(() => {
        progressVal += 6
        setMatchingProgress((prev) => Math.min(100, prev + 6))
        if (progressVal >= 100) {
          clearInterval(interval)
        }
      }, 95)
      timersRef.current.push(interval)

      // Step 2: Transition state for 2.2s then reveal step 3
      const t2 = setTimeout(() => {
        clearInterval(interval)
        setMatchingProgress(100)
        setCurrentStep(3)
        setIsAutoPlaying(false)
      }, 2200)

      timersRef.current.push(t2)
    }, 2400)

    timersRef.current.push(t1)
  }, [clearAllTimers])

  // Scroll into view trigger
  useEffect(() => {
    if (reduceMotion) {
      setCurrentStep(3)
      return
    }

    if (isInView && !hasStarted) {
      setHasStarted(true)
      startSequence()
    }
  }, [isInView, hasStarted, reduceMotion, startSequence])

  // Cleanup on unmount
  useEffect(() => {
    return () => clearAllTimers()
  }, [clearAllTimers])

  const handleReplay = () => {
    if (reduceMotion) {
      setCurrentStep(3)
      return
    }
    startSequence()
  }

  const handleStepClick = (step) => {
    clearAllTimers()
    setIsAutoPlaying(false)
    setCurrentStep(step)
    if (step === 2) {
      setMatchingProgress(100)
    }
  }

  // Animation variants
  const stageFadeVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduceMotion ? 0.15 : 0.45, ease: EASE },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -16,
      scale: reduceMotion ? 1 : 0.98,
      transition: { duration: reduceMotion ? 0.15 : 0.3, ease: EASE },
    },
  }

  const resultItemVariants = (index) => ({
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.5,
        delay: reduceMotion ? 0 : 0.12 + index * 0.1,
        ease: EASE,
      },
    },
  })

  return (
    <section
      id="discover"
      ref={containerRef}
      className="relative overflow-hidden bg-forest py-20 sm:py-28 lg:py-36 text-ivory"
      aria-label="Opportunity Matching Preview"
    >
      {/* Top divider separating from previous ivory section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />

      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 -top-36 h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-[110px]" />
        <div className="absolute -bottom-36 -right-36 h-[34rem] w-[34rem] rounded-full bg-apricot/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[48rem] w-[48rem] rounded-full bg-forest-deep/70 blur-[130px]" />
        {/* Subtle mesh dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[54rem]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime">
              Opportunity Discovery Flow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] text-ivory sm:text-[2.75rem] lg:text-[3.65rem]"
          >
            What if the right business is{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-lime">closer to you</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.1em] left-0 right-0 z-0 h-[0.32em] bg-lime/20"
              />
            </span>{' '}
            than you think?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-[42rem] text-base leading-[1.7] text-ivory/70 sm:text-lg"
          >
            Tell SnapBiz about yourself. We can help you explore business opportunities that align
            with your resources, skills, interests, and goals.
          </motion.p>
        </div>

        {/* Animated Visual Stage */}
        <div className="mt-14 sm:mt-18">
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest-deep/90 shadow-[0_32px_80px_-20px_rgba(3,40,36,0.95)] backdrop-blur-xl sm:rounded-[2.5rem]">
            {/* Stage Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory/10 px-5 py-4 sm:px-8 sm:py-5">
              {/* Left: Engine identity */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full bg-lime ${
                      isAutoPlaying ? 'animate-ping opacity-75' : 'opacity-40'
                    }`}
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
                </span>
                <span className="font-display text-xs font-bold tracking-wider text-ivory uppercase sm:text-sm">
                  Discovery Flow Simulation
                </span>
                <span className="hidden rounded-full bg-lime/10 px-2.5 py-0.5 text-[11px] font-semibold text-lime sm:inline-block border border-lime/20">
                  Future Preview
                </span>
              </div>

              {/* Center / Right: Step Switcher & Replay */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Step indicator buttons */}
                <div className="flex items-center rounded-full bg-forest/60 p-1 border border-ivory/10 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => handleStepClick(1)}
                    className={`rounded-full px-3 py-1 transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-lime text-forest-deep font-semibold shadow-sm'
                        : 'text-ivory/60 hover:text-ivory'
                    }`}
                    aria-label="View 1. Your Profile card"
                  >
                    1. Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepClick(2)}
                    className={`rounded-full px-3 py-1 transition-all duration-200 ${
                      currentStep === 2
                        ? 'bg-lime text-forest-deep font-semibold shadow-sm'
                        : 'text-ivory/60 hover:text-ivory'
                    }`}
                    aria-label="View 2. Matching Business Opportunities state"
                  >
                    2. Matching
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepClick(3)}
                    className={`rounded-full px-3 py-1 transition-all duration-200 ${
                      currentStep === 3
                        ? 'bg-lime text-forest-deep font-semibold shadow-sm'
                        : 'text-ivory/60 hover:text-ivory'
                    }`}
                    aria-label="View 3. Result cards"
                  >
                    3. Results
                  </button>
                </div>

                {/* Replay Sequence Button */}
                <button
                  type="button"
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-ivory/5 px-3.5 py-1.5 text-xs font-medium text-ivory/80 transition-colors hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
                  title="Replay animation sequence"
                  aria-label="Replay animation sequence"
                >
                  <RotateCcw
                    size={13}
                    className={`transition-transform duration-500 ${isAutoPlaying ? 'rotate-180' : ''}`}
                  />
                  <span className="hidden sm:inline">Replay</span>
                </button>
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="relative min-h-[580px] p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {/* ─────────────────────────────────────────────────────────────
                    STEP 1: 'Your Profile' Card showing example inputs:
                    Capital: ₦500,000
                    Skills: Graphic Design
                    Experience: 2 years
                    Location: Ibadan
                    Commitment: Full-time
                   ───────────────────────────────────────────────────────────── */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-profile"
                    variants={stageFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mx-auto w-full max-w-xl"
                  >
                    <div className="rounded-[1.75rem] border border-ivory/20 bg-forest/80 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                      {/* Card Header */}
                      <div className="flex items-start justify-between border-b border-ivory/10 pb-5">
                        <div className="flex items-center gap-3.5">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lime/15 text-lime border border-lime/20">
                            <Sliders size={20} strokeWidth={2.2} />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-display text-xl font-bold text-ivory sm:text-2xl">
                                Your Profile
                              </h3>
                              <span className="rounded-full bg-lime/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime border border-lime/25">
                                Example Input
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-ivory/50">
                              Entrepreneur discovery parameters
                            </p>
                          </div>
                        </div>

                        <span className="hidden rounded-full bg-ivory/10 px-3 py-1 text-xs font-semibold text-ivory/80 sm:inline-block">
                          5 of 5 Provided
                        </span>
                      </div>

                      {/* Inputs List */}
                      <div className="mt-6 space-y-3 sm:space-y-3.5">
                        {PROFILE_DATA.map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: reduceMotion ? 0.15 : 0.4,
                                delay: reduceMotion ? 0 : 0.1 + idx * 0.08,
                                ease: EASE,
                              }}
                              className={`group flex items-center justify-between rounded-xl border p-3.5 sm:px-4 sm:py-3.5 transition-all duration-200 ${
                                item.highlight
                                  ? 'border-lime/30 bg-lime/10 shadow-[0_0_24px_rgba(217,244,58,0.08)]'
                                  : 'border-ivory/10 bg-forest-deep/60 hover:border-ivory/20'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                                    item.highlight
                                      ? 'bg-lime text-forest-deep'
                                      : 'bg-ivory/10 text-ivory/70 group-hover:text-lime'
                                  }`}
                                >
                                  <Icon size={16} strokeWidth={2.2} />
                                </span>
                                <span className="text-sm font-medium text-ivory/75">
                                  {item.label}:
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-display text-base font-bold sm:text-lg ${
                                    item.highlight ? 'text-lime' : 'text-ivory'
                                  }`}
                                >
                                  {item.value}
                                </span>
                                <span className="hidden text-[11px] font-medium text-ivory/40 sm:inline">
                                  ({item.tag})
                                </span>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Card Footer status */}
                      <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-5 sm:flex-row">
                        <div className="flex items-center gap-2 text-xs font-medium text-ivory/60">
                          <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/20 text-lime">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          Profile parameters verified
                        </div>

                        <button
                          type="button"
                          onClick={() => handleStepClick(2)}
                          className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-4 py-2 text-xs font-bold text-lime transition-all duration-200 hover:bg-lime hover:text-forest-deep"
                        >
                          <span>Proceed to Match</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ─────────────────────────────────────────────────────────────
                    STEP 2: Animated Transition State:
                    'Matching Business Opportunities...'
                   ───────────────────────────────────────────────────────────── */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-matching"
                    variants={stageFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mx-auto flex w-full max-w-xl flex-col items-center text-center"
                  >
                    {/* Pulsing Concentric Radar */}
                    <div className="relative mb-8 grid place-items-center">
                      {!reduceMotion && (
                        <>
                          <motion.div
                            animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.05, 0.35] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute h-36 w-36 rounded-full border border-lime/30"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.8, 1], opacity: [0.25, 0, 0.25] }}
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: 0.3,
                            }}
                            className="absolute h-48 w-48 rounded-full border border-apricot/20"
                          />
                        </>
                      )}

                      <div className="relative grid h-24 w-24 place-items-center rounded-3xl border border-lime/40 bg-gradient-to-br from-lime/20 to-forest-deep p-4 text-lime shadow-[0_0_50px_rgba(217,244,58,0.3)]">
                        <Sparkles
                          size={42}
                          strokeWidth={1.8}
                          className={reduceMotion ? '' : 'animate-spin duration-3000'}
                        />
                      </div>
                    </div>

                    {/* Transition state headline */}
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ivory sm:text-3xl lg:text-[2.2rem]">
                      Matching Business Opportunities...
                    </h3>

                    <p className="mt-3 max-w-md text-sm text-ivory/65 sm:text-base">
                      Filtering 140+ Nigerian commercial business models against ₦500k capital,
                      creative skills, and local market demand.
                    </p>

                    {/* Real-time processing box */}
                    <div className="mt-8 w-full rounded-2xl border border-ivory/15 bg-forest/60 p-5 backdrop-blur-md">
                      {/* Animated Progress Bar */}
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-lime flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                          Analyzing Viability
                        </span>
                        <span className="font-mono text-ivory/70">{matchingProgress}%</span>
                      </div>

                      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-ivory/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-lime via-apricot to-lime transition-all duration-150"
                          style={{ width: `${matchingProgress}%` }}
                        />
                      </div>

                      {/* Criteria check stream */}
                      <div className="mt-5 space-y-2.5 text-left text-xs font-medium text-ivory/75">
                        {MATCHING_CRITERIA.map((criterion, idx) => (
                          <motion.div
                            key={criterion}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.15, ease: EASE }}
                            className="flex items-center gap-2.5"
                          >
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime/20 text-lime">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <span className="truncate">{criterion}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Profile reference badge */}
                    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-forest-deep px-4 py-2 border border-ivory/10 text-xs text-ivory/60">
                      <span className="font-semibold text-lime">Profile Active:</span>
                      <span>₦500,000</span>
                      <span>·</span>
                      <span>Graphic Design</span>
                      <span>·</span>
                      <span>2 yrs</span>
                      <span>·</span>
                      <span>Ibadan</span>
                      <span>·</span>
                      <span>Full-time</span>
                    </div>
                  </motion.div>
                )}

                {/* ─────────────────────────────────────────────────────────────
                    STEP 3: Reveal Three Result Cards:
                    Creative Studio
                    Digital Marketing Service
                    Brand & Content Agency
                   ───────────────────────────────────────────────────────────── */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-results"
                    variants={stageFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    {/* Top match notification header */}
                    <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-ivory/10 pb-5 sm:flex-row sm:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-forest-deep text-xs font-bold">
                            3
                          </span>
                          <h3 className="font-display text-lg font-bold text-ivory sm:text-xl">
                            Matches Found for Your Profile
                          </h3>
                        </div>
                        <p className="mt-1 text-xs text-ivory/60">
                          Based on ₦500,000 capital · Graphic Design (2 yrs) · Ibadan · Full-time
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowProfileDrawer(!showProfileDrawer)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-forest px-3.5 py-1.5 text-xs font-medium text-ivory/80 transition-colors hover:border-lime/40 hover:text-lime"
                        aria-expanded={showProfileDrawer}
                      >
                        <Sliders size={13} />
                        <span>{showProfileDrawer ? 'Hide Inputs' : 'View Inputs (₦500k · Ibadan)'}</span>
                      </button>
                    </div>

                    {/* Expandable Mini Profile Summary */}
                    <AnimatePresence>
                      {showProfileDrawer && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="mb-6 overflow-hidden rounded-2xl border border-lime/25 bg-forest/80 p-4"
                        >
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 text-xs">
                            {PROFILE_DATA.map((item) => (
                              <div key={item.id} className="rounded-xl bg-forest-deep/80 p-2.5">
                                <span className="text-[10px] uppercase tracking-wider text-ivory/40">
                                  {item.label}
                                </span>
                                <p className="font-display text-sm font-bold text-lime mt-0.5">
                                  {item.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Three Result Cards Grid */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
                      {RESULT_CARDS.map((card, idx) => (
                        <motion.div
                          key={card.id}
                          custom={idx}
                          variants={resultItemVariants(idx)}
                          initial="hidden"
                          animate="visible"
                          whileHover={reduceMotion ? {} : { y: -4 }}
                          className="group relative flex flex-col justify-between rounded-2xl border border-ivory/15 bg-forest/70 p-6 shadow-xl backdrop-blur-md transition-colors hover:border-lime/40 hover:bg-forest/90"
                        >
                          {/* Accent glow on hover */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime/10 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />

                          <div>
                            {/* Card Top: Category and Match Badge */}
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-ivory/50">
                                {card.category}
                              </span>
                              <span
                                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                                  card.color === 'lime'
                                    ? 'bg-lime text-forest-deep shadow-[0_0_12px_rgba(217,244,58,0.25)]'
                                    : 'bg-apricot text-forest-deep'
                                }`}
                              >
                                {card.matchScore}% Match
                              </span>
                            </div>

                            {/* Card Headline */}
                            <h4 className="mt-4 font-display text-xl font-bold tracking-tight text-ivory group-hover:text-lime transition-colors sm:text-2xl">
                              {card.title}
                            </h4>

                            <p className="mt-3 text-xs leading-relaxed text-ivory/70 sm:text-[13px]">
                              {card.description}
                            </p>

                            {/* Key Metrics Pill Grid */}
                            <div className="mt-5 space-y-2 rounded-xl bg-forest-deep/80 p-3.5 border border-ivory/5 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="text-ivory/50">Required Capital:</span>
                                <span className="font-semibold text-lime font-mono">
                                  {card.capitalRange}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-ivory/50">Launch Timeline:</span>
                                <span className="font-semibold text-ivory">{card.launchTime}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-ivory/50">Revenue Model:</span>
                                <span className="font-medium text-ivory/80">
                                  {card.businessModel}
                                </span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {card.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md bg-ivory/5 px-2 py-0.5 text-[10px] font-medium text-ivory/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Card Action */}
                          <div className="mt-6 border-t border-ivory/10 pt-4">
                            <button
                              type="button"
                              onClick={() => setSelectedResult(card)}
                              className="group/btn inline-flex w-full items-center justify-between rounded-xl bg-forest-deep px-4 py-2.5 text-xs font-semibold text-ivory transition-colors hover:bg-lime hover:text-forest-deep"
                            >
                              <span>Explore Roadmap Preview</span>
                              <ChevronRight
                                size={15}
                                className="transition-transform group-hover/btn:translate-x-1"
                              />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Small, clearly visible disclaimer below the visual */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-6 flex items-center justify-center gap-2 text-center"
          >
            <Info size={15} className="shrink-0 text-lime/80" aria-hidden="true" />
            <p className="text-xs font-medium text-ivory/60 sm:text-sm">
              Future feature preview. Recommendations will depend on the information provided and
              available data.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-10 flex flex-col items-center justify-center gap-4 text-center"
          >
            <button
              type="button"
              onClick={() => setIsOptionsModalOpen(true)}
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-lime px-2 py-2 pl-8 font-display text-base font-bold text-forest-deep shadow-[0_12px_36px_-8px_rgba(217,244,58,0.35)] transition-all duration-300 hover:bg-lime/90 hover:shadow-[0_16px_44px_-6px_rgba(217,244,58,0.5)] hover:scale-[1.02] sm:text-lg"
            >
              <span>Discover Your Options →</span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </button>

            <p className="text-xs font-medium text-ivory/50">
              Personalized matching · Tailored to Nigerian market realities · Zero upfront cost
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Modal: Discover Your Options (Intake simulation) */}
      <AnimatePresence>
        {isOptionsModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOptionsModalOpen(false)}
              className="absolute inset-0 bg-forest-deep/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative w-full max-w-lg rounded-3xl border border-ivory/20 bg-forest p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setIsOptionsModalOpen(false)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-lime text-forest-deep font-bold text-sm">
                  <Sparkle size={16} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-lime">
                  Early Discovery Intake
                </span>
              </div>

              <h3 id="modal-title" className="mt-3 font-display text-2xl font-bold text-ivory">
                Discover Your Options
              </h3>
              <p className="mt-1 text-xs text-ivory/65 leading-relaxed">
                Test how SnapBiz matches opportunities based on your personal starting parameters.
              </p>

              {/* Interactive Input Form */}
              <div className="mt-6 space-y-4 text-left">
                {/* Capital selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ivory/70 mb-2">
                    Available Starting Capital
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['₦250,000', '₦500,000', '₦1,000,000+'].map((cap) => (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => setCustomCapital(cap)}
                        className={`rounded-xl py-2 px-3 text-xs font-semibold border transition-all ${
                          customCapital === cap
                            ? 'bg-lime text-forest-deep border-lime font-bold'
                            : 'bg-forest-deep/60 border-ivory/10 text-ivory/80 hover:border-ivory/30'
                        }`}
                      >
                        {cap}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Skill selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ivory/70 mb-2">
                    Primary Skill or Interest
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Graphic Design', 'Cooking / Food', 'Tech / Coding'].map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => setCustomSkill(skill)}
                        className={`rounded-xl py-2 px-2 text-xs font-semibold border truncate transition-all ${
                          customSkill === skill
                            ? 'bg-lime text-forest-deep border-lime font-bold'
                            : 'bg-forest-deep/60 border-ivory/10 text-ivory/80 hover:border-ivory/30'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ivory/70 mb-2">
                    Your Location in Nigeria
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Ibadan', 'Lagos', 'Abuja'].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setCustomLocation(loc)}
                        className={`rounded-xl py-2 px-3 text-xs font-semibold border transition-all ${
                          customLocation === loc
                            ? 'bg-lime text-forest-deep border-lime font-bold'
                            : 'bg-forest-deep/60 border-ivory/10 text-ivory/80 hover:border-ivory/30'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Early Access Notification */}
                <div className="mt-6 rounded-2xl bg-forest-deep p-4 border border-ivory/10">
                  <p className="text-xs font-medium text-ivory/80">
                    Want an automated report when this feature launches?
                  </p>
                  {waitlistSubmitted ? (
                    <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-lime">
                      <Check size={16} />
                      You&apos;re on the priority notification list!
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        if (waitlistEmail) setWaitlistSubmitted(true)
                      }}
                      className="mt-3 flex gap-2"
                    >
                      <input
                        type="email"
                        required
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 rounded-xl border border-ivory/15 bg-forest px-3.5 py-2 text-xs text-ivory placeholder-ivory/40 focus:border-lime focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-lime px-4 py-2 text-xs font-bold text-forest-deep transition-colors hover:bg-lime/90"
                      >
                        Notify Me
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOptionsModalOpen(false)}
                  className="rounded-full bg-ivory/10 px-5 py-2 text-xs font-semibold text-ivory hover:bg-ivory/20"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Business Roadmap Preview */}
      <AnimatePresence>
        {selectedResult && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blueprint-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResult(null)}
              className="absolute inset-0 bg-forest-deep/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative w-full max-w-xl rounded-3xl border border-ivory/20 bg-forest p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedResult(null)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-lime/20 px-2.5 py-0.5 text-[11px] font-bold text-lime border border-lime/30">
                  {selectedResult.matchScore}% Match
                </span>
                <span className="text-xs text-ivory/50">{selectedResult.category}</span>
              </div>

              <h3 id="blueprint-title" className="mt-3 font-display text-2xl font-bold text-ivory">
                {selectedResult.title} Roadmap Preview
              </h3>

              <p className="mt-2 text-xs text-ivory/70 leading-relaxed sm:text-sm">
                {selectedResult.description}
              </p>

              {/* Startup Capital Allocation */}
              <div className="mt-5 rounded-2xl bg-forest-deep/80 p-4 border border-ivory/10">
                <p className="text-xs font-semibold text-lime uppercase tracking-wider">
                  ₦500,000 Budget Allocation Breakdown
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
                  <div className="rounded-lg bg-forest/60 p-2">
                    <span className="text-ivory/40 block text-[10px]">Workstation / Tools</span>
                    <span className="font-semibold text-ivory">₦200,000</span>
                  </div>
                  <div className="rounded-lg bg-forest/60 p-2">
                    <span className="text-ivory/40 block text-[10px]">CAC Registration</span>
                    <span className="font-semibold text-ivory">₦45,000</span>
                  </div>
                  <div className="rounded-lg bg-forest/60 p-2">
                    <span className="text-ivory/40 block text-[10px]">Marketing & Samples</span>
                    <span className="font-semibold text-ivory">₦80,000</span>
                  </div>
                  <div className="rounded-lg bg-forest/60 p-2">
                    <span className="text-ivory/40 block text-[10px]">Branding & Domain</span>
                    <span className="font-semibold text-ivory">₦35,000</span>
                  </div>
                  <div className="rounded-lg bg-forest/60 p-2 sm:col-span-2">
                    <span className="text-ivory/40 block text-[10px]">Working Capital Reserve</span>
                    <span className="font-semibold text-lime">₦140,000</span>
                  </div>
                </div>
              </div>

              {/* 4 Launch Milestones */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ivory/60 mb-2">
                  Launch Milestones
                </p>
                <ul className="space-y-2 text-xs text-ivory/80">
                  <li className="flex items-center gap-2">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/20 text-lime font-bold text-[10px]">
                      1
                    </span>
                    <span>Set up core business profile, portfolio & rate card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/20 text-lime font-bold text-[10px]">
                      2
                    </span>
                    <span>Register business name with CAC (Sole Proprietorship)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/20 text-lime font-bold text-[10px]">
                      3
                    </span>
                    <span>Direct outreach to 25 target commercial SMEs in Ibadan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/20 text-lime font-bold text-[10px]">
                      4
                    </span>
                    <span>Secure first 2 recurring monthly retainer clients</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedResult(null)}
                  className="rounded-full bg-lime px-6 py-2 text-xs font-bold text-forest-deep transition-colors hover:bg-lime/90"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
