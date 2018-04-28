const proxy = [
    {
      secure: false,
      changeOrigin: true,
      context: '/',
      target: 'http://localhost:8080',
      pathRewrite: { '^/': '' }
    }
  ];
  module.exports = proxy;