const hazel = require('hazel-server');

module.exports = (req, res) => {
  const { run } = hazel({
    account: 'Volodymyr-Bauzi',
    repository: 'cashflow',
    token: process.env.GITHUB_TOKEN,
    url: 'https://cashflow-updates.vercel.app'
  });
  
  return run(req, res);
};
