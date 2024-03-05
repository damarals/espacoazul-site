/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-23dab857c78448ae98d9436586ffc651.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default config
