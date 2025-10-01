/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',         // leave this empty
      pathname: '/**',  // allow all Unsplash images
    },],
  }
};

export default nextConfig;
