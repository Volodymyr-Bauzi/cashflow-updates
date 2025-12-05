const hazel = require('hazel-server');

module.exports = (req, res) => {
  console.log('Request URL:', req.url);
  console.log('Token present:', !!process.env.GITHUB_TOKEN);
  
  return hazel({
    account: 'Volodymyr-Bauzi',
    repository: 'cashflow',
    token: process.env.GITHUB_TOKEN,
    url: 'https://cashflow-updates.vercel.app'
  })(req, res);
};
