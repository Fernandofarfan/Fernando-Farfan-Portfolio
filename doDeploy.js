const ghpages = require('gh-pages');

console.log('Building and publishing to gh-pages...');
ghpages.publish('dist', {
  branch: 'gh-pages',
  dotfiles: true,
  src: '**/*',
  dest: '.',
  add: true, // This stops it from deleting the git history/cache incorrectly
}, callback);

function callback(err) {
  if (err) {
    console.error('Error during deployment:', err);
  } else {
    console.log('Successfully published!');
  }
}
