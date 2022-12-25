/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/jobs",
        destination: "https://angel.co/company/radish-la/jobs",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
