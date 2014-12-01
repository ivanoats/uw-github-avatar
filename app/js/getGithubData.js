'use strict';

var getGithubData = function getGithubData(url, done) {
  var xhr = require('xhr-browserify');
  var githubUrl = url || 'https://api.github.com/repositories?since=1000';
  var uri = require('url').parse(githubUrl, true);

  xhr(uri, {jsonp: true}, function ghcb (err, data) {
    console.log('status is ', data.meta.status);
    // data.meta.status should equal 200, if not show user there was a problem with Github
    done(data.data);
  });
};

module.exports = getGithubData;