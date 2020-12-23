const rootPath = '/usr/share/nginx/html/smidgeo.com/notes/';
//const rootPath = '/mnt/storage/smidgeo.com/notes/';
const issoScript = `<script data-isso="//smidgeo.com/notes/deathmtn/comments/"
  data-isso-avatar="false"
  data-isso-vote="false"
  data-isso-require-author="true"
  data-isso-require-email="true"
  src="//smidgeo.com/notes/deathmtn/comments/js/embed.min.js"></script>`;

module.exports = {
  name: 'deathmtn',
  archiveOpts: {
    title: 'deathmtn',
    homeLink: 'https://smidgeo.com/notes/deathmtn',
    rootPath: rootPath + '/deathmtn',
    maxEntriesPerPage: 25,
    fileAbstractionType: 'LocalGit',
    indexOnlyExtraHTML: issoScript,
    //headExtraHTML: `<script data-isso="//smidgeo.com/notes/deathmtn/comments/"
    //src="//smidgeo.com/notes/deathmtn/comments/js/embed.min.js"></script>
    //`,
    footerHTML: `<footer id="footer">
    <div>
      <a href="https://smidgeo.com/notes/deathmtn/search">Search this weblog</a>
    </div>
    <div>
      <a href="https://smidgeo.com/notes/deathmtn/rss/index.rss">RSS feed</a>
    </div>
    <div>
      <a rel="me" href="mailto:deathmtn@fastmail.com">deathmtn@fastmail.com</a>
    </div>
    <div>
      <a href="https://smidgeo.com/notes/deathmtn-reports/">TFIDF summaries of this weblog</a>
    </div>
    <br /><br />
    <div>
    <div>This site is updated via <a href="https://github.com/jimkang/note-taker">note-taker</a> and <a href="https://github.com/jimkang/note-sender">note-sender</a>. note-taker is an adapter for <a href="https://github.com/jimkang/static-web-archive">static-web-archive</a>.
    </div>
    <div>
      Want to read more stuff?
      <ul>
        <li><a href="https://smidgeo.com/bots/">My bots</a></li>
        <li><a href="https://tinyletter.com/jimkang">My newsletter about my projects and plans</a></li>
        <li><a href="https://jimkang.com">My personal web site, whatever that means</a></li>
      </ul>
    </div>
    </footer>
    `,
    generateRSS: true,
    archiveBaseURL: 'https://smidgeo.com/notes/deathmtn',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/notes/deathmtn/rss/index.rss',
      site_url: 'https://smidgeo.com/notes/deathmtn/'
    },
    modSingleEntryPageFragmentFn({ innerFragment }) {
      return `${innerFragment}
${issoScript}

<section id="isso-thread"></section>`;
    },
    modIndexPageFragmentFn({ cell, fragment }) {
      const lastLiPos = fragment.lastIndexOf('</li>');
      return (
        fragment.slice(0, lastLiPos) +
        ` <a href="${cell.id}.html#isso-thread">Comments</a> </li>`
      );
    }
  },
  secret: require('./secrets').deathmtn
};
