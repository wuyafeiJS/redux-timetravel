module.exports = {
  '/quote': {
    target: 'http://112.11.22.22',
    pathRewrite: {
      '^/quote': ''
    }
  }
};
