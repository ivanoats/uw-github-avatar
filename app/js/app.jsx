/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;

var Githubbers = React.createClass({
  getInitialState: function() {
    return {
      login: '',
      avatarUrl: ''
    }
  },

  render: function() {
    return (
      <div className="col-md-1 avatar">
        <img src={this.state.avatarUrl} alt="avatar"/>
      </div>
    )
  },

  componentDidMount: function() {
    $.getJSON(this.props.source, function (result) {
      var firstRepo = result[0];
      var firstOwner = firstRepo.owner;
      if (this.isMounted()) {
        this.setState({
          login: firstOwner.login,
          avatarUrl: firstOwner.avatar_url
        });
      }
    }.bind(this));
  }
});

React.render(<Githubbers source="https://api.github.com/repositories?since=1000"/>, document.getElementById('mount-point'));