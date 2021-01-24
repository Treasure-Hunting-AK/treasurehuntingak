import Ebay from 'ebay-node-api';

const ebay = new Ebay({
  clientID: process.env.EBAY_CLIENT_ID,
  clientSecret: process.env.EBAY_SECRET_KEY,
  body: {
    grant_type: 'client_credentials',
    scope: 'https://api.ebay.com/oauth/api_scope',
  },
});

export default function handler(req, res) {
  return ebay.getAccessToken().then(() => {
    const keyword = req.query.q || 'vintage';
    ebay
      .searchItems({
        keyword,
        limit: '12',
        filter: 'sellers:{treasurehuntingak}',
      })
      .then((d) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(d);
      })
      .catch((err) => {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: `something went wrong${err}` }));
      });
  });
}
