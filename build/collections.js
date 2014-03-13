/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('./common.js'),
  sizes = Common.values('Sizes');

// === Field ===

var Field = React.createClass({displayName: 'Field',

  propTypes: {
    label: React.PropTypes.string
  },

  render: function () {
    /* jshint ignore:start */
    return (
      React.DOM.div(null, 
        this.props.label ? React.DOM.label(null, this.props.label) : false, 
        this.props.children
      )
      );
    /* jshint ignore:end */
  }
});


module.exports = {
  Field: Field
};