/** @jsx React.DOM */

// var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;

var getGithubData = require('./getGithubData');

var getOwners = data => _.pluck(data, 'owner');
var getAvatars = owners => _.pluck(owners, 'avatar_url');

var main = function main (data) {
  var owners = getOwners(data);
  console.log('Owners: ', owners );
  console.log('Avatar URLs: ', getAvatars( owners ))
};

getGithubData('https://api.github.com/repositories?since=1000', main);
var imageURL = "https://avatars.githubusercontent.com/u/614?v=3";

var Githubber = React.createClass({
  render: function() {
    return (
        <div className="col-md-1 avatar">
          <img src={imageURL} alt="avatar"/>
        </div>
    )
  }
});

React.render(<Githubber/>, document.getElementById('mount-point'));