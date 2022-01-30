module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/text',
        destination: 'http://localhost:3001/text/abc',
      },
    ];
  },
};
