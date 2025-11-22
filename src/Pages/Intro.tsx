import { useEffect, useState, lazy, Suspense } from 'react'
import { ArrowDown } from 'lucide-react'
import { handleScrollTo } from '@/utils/ScrollTo'

const LazyParticles = lazy(() =>
  import('../components/ui/particles').then(m => ({ default: m.Particles }))
)

function Intro() {
  const isClient = typeof window !== 'undefined'

  const [showParticles, setShowParticles] = useState(
    isClient ? window.matchMedia('(min-width: 319px)').matches : false
  )
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    isClient ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  )


  useEffect(() => {
    if (!isClient) return

    const screenCheck = window.matchMedia('(min-width: 319px)')
    const motionCheck = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleScreenChange = (e: MediaQueryListEvent) =>
      setShowParticles(e.matches)
    const handleMotionChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches)

    screenCheck.addEventListener('change', handleScreenChange)
    motionCheck.addEventListener('change', handleMotionChange)

    return () => {
      screenCheck.removeEventListener('change', handleScreenChange)
      motionCheck.removeEventListener('change', handleMotionChange)
    }
  }, [isClient])

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="flex flex-col gap-6 items-center justify-center z-10">
        <span className="text-gray-300 text-center text-5xl md:text-8xl font-semibold">
          Welcome to my Portfolio
        </span>

        <span className="text-gray-300 text-center text-3xl md:text-5xl font-semibold">
          Let&apos;s take a quick look
        </span>

        <button
          onClick={() => handleScrollTo('Hero')}
          aria-label="Scroll to hero"
          className="hover:cursor-pointer bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowDown
            color="#ffffff"
            size={50}
            className={prefersReducedMotion ? '' : 'animate-bounce'}
          />
        </button>
      </div>

      {showParticles && (
        <Suspense fallback={<div className="absolute inset-0 z-0" aria-hidden />} >
          <LazyParticles
            className="absolute inset-0 z-0"
            quantity={65}
            ease={90}
            refresh={false}
          />
        </Suspense>
      )}
    </section>
  )
}

export default Intro
