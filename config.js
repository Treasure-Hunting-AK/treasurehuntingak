module.exports = {
  EBAY_SECRET_KEY: process.env.EBAY_SECRET_KEY,
  EBAY_CLIENT_ID: process.env.EBAY_CLIENT_ID,
  API_URL:
    process.env.node === 'production'
      ? 'https://treasurehuntingak.com/'
      : 'http://localhost:3000/',
};
