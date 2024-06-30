/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'images.tcdn.com.br' },
        { protocol: 'http', hostname: 'images.tcdn.com.br' },
        { protocol: 'https', hostname: 'imagens.morelate.com.br' }, // Add this line
        { protocol: 'http', hostname: 'imagens.morelate.com.br' }, // Add this line
        { protocol: 'https', hostname: 'via.placeholder.com' }, // Add this line
        { protocol: 'http', hostname: 'via.placeholder.com' }, // Add this line
        { protocol: 'https', hostname: 'mockup-api.teespring.com' }, // Add this line
        { protocol: 'http', hostname: 'mockup-api.teespring.com' }, // Add this line
      ],
    },
  };
  
  
  export default nextConfig;