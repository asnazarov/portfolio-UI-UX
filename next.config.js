const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  webpack: (config) => {

    return config;
  },
  images: {
    disableStaticImages: true,
    domains: ['api.rg.artw.dev'],
  }

}

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withImages, {
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"]
  }]
], nextConfig)