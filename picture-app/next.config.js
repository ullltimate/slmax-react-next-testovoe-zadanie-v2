/** @type {import('next').NextConfig} */
const nextConfig = {  
    env: {
        ACCESS_KEY: process.env.YOUR_ACCESS_KEY,
        ID: process.env.CLIENT_ID,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
}

module.exports = nextConfig
