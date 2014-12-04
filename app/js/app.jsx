/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
// allow React Dev tools to work
window.React = React;

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
              <div className="col-md-1 avatar" key={i}>
                <img src={item.avatar_url} alt="avatar"/>
              </div>
            );
          }, this)}
        </div>
    );
  },

  componentDidMount: function() {
    $.getJSON(this.props.source, function (result) {
      console.log(result);
      if (this.isMounted()) {
        this.setState({
          owners: _.pluck(result,'owner')
        });
      }
    }.bind(this));
  }
});

React.render(<Githubbers source="https://api.github.com/repositories?since=1000"/>, document.getElementById('mount-point'));