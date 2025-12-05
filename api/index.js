const hazel = require('hazel-server');

module.exports = (req, res) => {
  return hazel({
    account: 'Volodymyr-Bauzi',
    repository: 'cashflow',
    token: process.env.GITHUB_TOKEN,
    url: 'https://cashflow-updates.vercel.app'
  })(req, res);
};
