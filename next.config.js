// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizePackageImports: [
      'react-leaflet',
      '@types/leaflet',
      'leaflet-defaulticon-compatibility'
    ]
  },
  webpack: (config) => {
    // Configuración de aliases mejorada
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      'leaflet$': path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet.js'),
      'leaflet.css$': path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet.css')
    };

    // Regla CSS solo para Leaflet
    config.module.rules.push({
      test: /leaflet\.css$/,
      use: [
        { loader: 'style-loader' },
        { 
          loader: 'css-loader',
          options: {
            url: {
              filter: (url) => !url.startsWith('images/')
            }
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;