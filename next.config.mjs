/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: ['aceternity.com'],
    },
    optimizeFonts: false,
};


export default nextConfig;
