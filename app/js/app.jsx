/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;

var Avatar = React.createClass({
  render: function() {
    startsWithA = str => str.indexOf('a') === 0;
    classForStartsWithA = login => startsWithA(login) ? 'startsWithA' : '';
    var login = this.props.item.login;
    var url = this.props.item.avatar_url;
    return (
        <div className="col-md-1 avatar">
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
      if (this.isMounted()) {
        this.setState({
          owners: _.pluck(result,'owner')
        });
      }
    }.bind(this));
  }
});

React.render(<Githubbers source="https://api.github.com/repositories?since=1000"/>, document.getElementById('mount-point'));