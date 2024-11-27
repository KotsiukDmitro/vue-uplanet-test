module.exports = {
    client: {
      service: {
        name: 'u-planet',
        url: import.meta.env.VITE_BASE_URL,
      },
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }