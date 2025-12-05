const hazel = require('hazel-server');

module.exports = (req, res) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  console.log('Request URL:', req.url);
  console.log('Base URL:', baseUrl);
  console.log('Token present:', !!process.env.GITHUB_TOKEN);
  
  return hazel({
    account: 'Volodymyr-Bauzi',
    repository: 'cashflow',
    token: process.env.GITHUB_TOKEN,
    url: baseUrl,
    cache: false
  })(req, res);
};
