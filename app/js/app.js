'use strict';

// var $ = require('jquery');
var _ = require('lodash');
var getGithubData = require('./getGithubData');

var getOwners = function owners(data) {
  return _.pluck(data, 'owner');
};

var getAvatars = function avatars(owners) {
  return _.pluck(owners, 'avatar_url');
};

var main = function main (data) {
  var owners = getOwners(data);
  console.log('Owners: ', owners );
  console.log('Avatar URLs: ', getAvatars( owners ))
};

getGithubData('https://api.github.com/repositories?since=1000', main);

