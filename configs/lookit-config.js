const rootPath = '/usr/share/nginx/html/andersonkang.com/lookit/';

module.exports = {
  name: 'lookit',
  archiveOpts: {
    title: 'Lookit!',
    homeLink: 'https://andersonkang.com/lookit',
    rootPath,
    maxEntriesPerPage: 10,
    fileAbstractionType: 'LocalFile'
  },
  secret: require('./secrets').lookit
};
