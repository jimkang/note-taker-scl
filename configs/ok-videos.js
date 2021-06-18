const rootPath = '/usr/share/nginx/html/jimkang.com/ok-videos/';

module.exports = {
  name: 'ok-videos',
  archiveOpts: {
    title: 'Videos OK for a kid!',
    homeLink: 'https://jimkang.com/ok-videos',
    rootPath,
    maxEntriesPerPage: 10,
    fileAbstractionType: 'fs',
  },
  secret: require('./secrets')['ok-videos'],
};
