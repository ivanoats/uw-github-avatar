/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;
const GITHUB_URL="https://api.github.com/repositories?since=1000";
var startsWithA = str => str.indexOf('a') === 0 || str.indexOf('A') === 0;

var Avatar = React.createClass({
  handleMouseOver: function(event) {
    if (startsWithA(this.props.item.login)) {
      console.log(this.props.item.followers_url);
    }
  },
  render: function() {
    var classForStartsWithA = login => startsWithA(login) ? 'startsWithA' : '';
    var login = this.props.item.login;
    var url = this.props.item.avatar_url;
    return (
        <div className="col-md-1 avatar" onMouseOver={this.handleMouseOver}>
          <img className={classForStartsWithA(login)} src={url} alt="avatar" />
        </div>
    )
  }
});

var Githubbers = React.createClass({
  getInitialState: function() {
    return {
      owners: []
    }
  },

  render: function() {
    return (
        <div className="row">
          {this.state.owners.map(function(item, i) {
            return (
              <Avatar key={i} item={item} />
            );
          }, this)}
        </div>
    );
  },

  componentDidMount: function() {
    $.getJSON(this.props.source, function (result) {
      if (this.isMounted()) { this.setState({ owners: _.pluck(result,'owner') }); }
    }.bind(this));
  }
});

React.render(<Githubbers source={GITHUB_URL}/>, document.getElementById('mount-point'));