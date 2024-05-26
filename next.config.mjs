/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 's3.timeweb.com',
            port: '',
            // pathname: '/account123/**',
        }]
    }
};

export default nextConfig;
