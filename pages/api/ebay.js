import Ebay from 'ebay-node-api';

const ebay = new Ebay({
  clientID: 'FreedomE-Treastur-PRD-0c8e8a00c-419e85de',
  clientSecret: 'PRD-c8e8a00c511b-f205-4852-acc9-1ff4',
  body: {
    grant_type: 'client_credentials',
    scope: 'https://api.ebay.com/oauth/api_scope',
  },
});

export default function handler(req, res) {
  ebay.getAccessToken().then(() => {
    const keyword = req.query.q || 'antique';
    ebay
      .searchItems({
        keyword,
        limit: '10',
        filter: 'sellers:{treasurehuntingak}',
      })
      .then((d) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(d);
      })
      .catch((err) => {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: `something went wrong${err}` }));
      });
  });
}
