module.exports = {
  API_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://treasurehuntingak.com/'
      : 'http://localhost:3000/',
};
