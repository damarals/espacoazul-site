import { useEffect, useMemo, useState } from 'react'
import tailwindConfig from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const useTailwindBreakpoint = ({
  onBreakpointChange,
}: {
  // eslint-disable-next-line no-unused-vars
  onBreakpointChange?: (breakpoint: string) => void
} = {}): string => {
  const fullConfig = resolveConfig(tailwindConfig)
  const breakpoints = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const screens = (fullConfig.theme as any).screens
    const breakpoints: { [key: string]: string | number } = {
      xs: '0px',
      ...screens,
    }
    return breakpoints
  }, [fullConfig.theme])

  const sortedBreakpoints = Object.keys(breakpoints).sort(
    (a, b) =>
      parseInt(breakpoints[a] as string, 10) -
      parseInt(breakpoints[b] as string, 10),
  )
  const smallestBreakpoint = sortedBreakpoints[0] as string

  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('')

  useEffect(() => {
    let debounceTimeout: ReturnType<typeof setTimeout>

    const checkBreakpoint = () => {
      const matchedBreakpoints = Object.keys(breakpoints).filter(
        (breakpoint) => {
          const breakpointValue = breakpoints[breakpoint] as string
          const breakpointSize = parseInt(breakpointValue, 10)
          return !isNaN(breakpointSize) && window.innerWidth >= breakpointSize
        },
      )
      const newBreakpoint = matchedBreakpoints.pop() || smallestBreakpoint
      if (newBreakpoint !== currentBreakpoint) {
        setCurrentBreakpoint(newBreakpoint)
        if (onBreakpointChange) {
          onBreakpointChange(newBreakpoint)
        }
      }
    }

    checkBreakpoint()

    const debouncedCheckBreakpoint = () => {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(checkBreakpoint, 100)
    }

    window.addEventListener('resize', debouncedCheckBreakpoint)

    return () => {
      window.removeEventListener('resize', debouncedCheckBreakpoint)
      clearTimeout(debounceTimeout)
    }
  }, [breakpoints, currentBreakpoint, onBreakpointChange, smallestBreakpoint])

  return currentBreakpoint
}

export default useTailwindBreakpoint
