/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
const nextConfig = {
  images: { 
    remotePatterns: [ 
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '3003',
        pathname: '/**', // Match all images from the domain
      },
    ],
  },
  webpack(config, {isServer}) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "headerMFE",
        filename: `static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        exposes: {
          "./Header": "./components/Header.js",
        },
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
          tailwindcss: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
