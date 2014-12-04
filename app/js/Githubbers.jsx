/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
var Avatar = require('./Avatar.jsx');

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
        this.setState({ owners: _.uniq( _.pluck(result,'owner'), owner => owner.login ) });
      }
    }.bind(this));
  }
});

module.exports = Githubbers;
