/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "palmbeachgrill.com",
      "www.thetrendspotter.net",
      "media-cdn.tripadvisor.com",
      "www.elmundoeats.com",
      "rotaprincipal.com.br",
      "www.oceaniacruises.com",
      "upwork.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  webpack(config, options) {
    return config;
  },
});

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        register: true,
        scope: "/",
        sw: "service-worker.js",
        runtimeCaching: [
          {
            urlPattern: /.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "static-font-assets",
              expiration: {
                maxEntries: 4,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },
          {
            urlPattern: /.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "static-image-assets",
              expiration: {
                maxEntries: 64,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /.(?:js)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "static-js-assets",
              expiration: {
                maxEntries: 16,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /.(?:css|less)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "static-style-assets",
              expiration: {
                maxEntries: 16,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /.(?:json|xml|csv)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "static-data-assets",
              expiration: {
                maxEntries: 16,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "others",
              expiration: {
                maxEntries: 16,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
        ],
      },
    },
  ],
  [withImages],
  nextConfig,
]);
