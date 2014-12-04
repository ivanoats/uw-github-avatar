/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;
const GITHUB_URL="https://api.github.com/repositories?since=1000";

var Githubbers = require('./Githubbers.jsx');

React.render(<Githubbers source={GITHUB_URL}/>, document.getElementById('mount-point'));