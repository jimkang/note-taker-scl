const rootPath = '/usr/share/nginx/html/jimkang.com/ok-videos/';

module.exports = {
  name: 'ok-videos',
  archiveOpts: {
    title: 'Videos OK for a kid!',
    homeLink: 'https://jimkang.com/ok-videos',
    rootPath,
    maxEntriesPerPage: 10,
    fileAbstractionType: 'fs',
    footerHTML: `<footer id="footer">
      <div>This site is updated via <a href="https://github.com/jimkang/note-taker">note-taker</a> and <a href="https://github.com/jimkang/note-sender">note-sender</a>. note-taker is an adapter for <a href="https://github.com/jimkang/static-web-archive">static-web-archive</a>.
      </div>
      <div>
        <a href="https://jimkang.com/ok-videos/rss/index.rss">RSS feed</a>
      </div>
      <div>
        <a href="mailto:jimkang@fastmail.com">jimkang@fastmail.com</a>
      </div>
      </footer>
      `,
    generateRSS: true,
    archiveBaseURL: 'https://jimkang.com/ok-videos',
    rssFeedOpts: {
      feed_url: 'https://jimkang.com/ok-videos/rss/index.rss',
      site_url: 'https://jimkang.com/ok-videos/',
    },
  },
  secret: require('./secrets')['ok-videos'],
};
