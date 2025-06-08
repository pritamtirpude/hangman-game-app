import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Hangman Game',
        short_name: 'Hangman',
        start_url: '/',
        description: 'Fun Word Guessing Game with Multiple Categories',
        theme_color: '#4A55A2',
        scope: '/',
        background_color: '#3c74ff',
        display: 'standalone',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: '/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: '/screen-one.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screen-two.png',
            sizes: '2726x1704',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screen-three.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screen-four.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screen-narrow-one.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: '/screen-narrow-two.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: '/screen-narrow-three.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: '/screen-narrow-four.png',
            sizes: '540x361',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,wav,mp3}'],
        runtimeCaching: [
          {
            // Cache audio files
            urlPattern: /^.*\/audio\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'audio-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Cache images
            urlPattern: /^.*\/images\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Cache fonts
            urlPattern: /^.*\/fonts\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'font-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
  },
});
