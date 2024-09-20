/** @type {import('next').NextConfig} */
const nextConfig = {
    source: '/:path*',
    destination: 'http://localhost:5000/:path*' // Proxy to Backend
};

export default nextConfig;
