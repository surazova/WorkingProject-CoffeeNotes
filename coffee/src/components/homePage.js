"use strict";

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className = "jumbotron">
        <h1>CoffeeNotes Homepage</h1>
        <p>Using React, React Router, and Flux</p>
      </div>
    );
  }
});

module.exports = Home;
