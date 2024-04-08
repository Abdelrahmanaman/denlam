/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {   protocol: "https",
                hostname: "images.unsplash.com"
            },
             {
                hostname: 'res.cloudinary.com'
            }
        ]
    }
};

export default nextConfig;