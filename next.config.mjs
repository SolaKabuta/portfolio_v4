/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['aceternity.com', 'ik.imagekit.io'],
    },
    optimizeFonts: true,
};


export default nextConfig;
