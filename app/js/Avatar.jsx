/** @jsx React.DOM */

var $ = require('jquery');
var _ = require('lodash');
var React = require('react/addons');
var startsWithA = str => str.indexOf('a') === 0 || str.indexOf('A') === 0;

var Avatar = React.createClass({
  handleMouseOver: function(event) {
    var item = this.props.item;
    if (startsWithA(item.login)) {
      // TODO: _.memoize this function to remove duplicate XHR requests?
      $.getJSON(item.followers_url, function (result) {
        if (this.isMounted()) {
          this.setState({ followers: _.pluck(result,'login') });
          console.log(this.state.followers);
        }
      }.bind(this));
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

module.exports = Avatar;
