'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
          opacity: 1,
        },
        fullScreen: {
          enable: false,
        },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
          collisions: {
            absorb: {
              speed: 2,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: true,
            maxSpeed: 50,
            mode: 'bounce',
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: 'percent',
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: 'none',
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: 'out',
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            random: true,
            size: false,
            speed: {
              min: 1,
              max: 5,
            },
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            limit: 0,
            value: 25,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.2,
            },
            value: {
              min: 0.2,
              max: 0.5,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 0.4,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
              minimumValue: 0.2,
            },
          },
          shape: {
            close: true,
            fill: true,
            options: {
              images: [
                {
                  src: '/puzzle-piece.svg',
                  width: 32,
                  height: 32,
                },
              ],
            },
            type: 'image',
          },
          size: {
            random: {
              enable: false,
              minimumValue: 10,
            },
            value: {
              min: 10,
              max: 35,
            },
            animation: {
              count: 0,
              enable: false,
              speed: 40,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
              minimumValue: 0.1,
            },
          },
          rotate: {
            random: {
              enable: true,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: true,
              speed: 5,
              decay: 0,
              sync: false,
            },
            direction: 'random',
            path: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 2,
          },
        },
        zLayers: 100,
      }}
      className="absolute h-full w-full"
    />
  )
}
