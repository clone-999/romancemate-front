/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  httpAgentOptions: {
    keepAlive: false,
  },
  images:{
    domains:['eporner.com']
  },
}

module.exports = nextConfig
