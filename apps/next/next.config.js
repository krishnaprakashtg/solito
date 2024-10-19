const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
  ],
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bjs.scene7.com',
        pathname: '/**', // Match all images from the domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', 
        pathname: '/**', // Match all images from the domain
      },
    ],
  }
}

module.exports = withExpo(nextConfig)
