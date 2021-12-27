const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Recursive',
          'Arimo',
          'Helvetica',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          'Rec Mono Casual',
          'Cousine',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
}
