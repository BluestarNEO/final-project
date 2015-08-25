var React = require('react');

var Resource = React.createClass({
  handleClick: function() {
    console.log('clicked: ' + this.props.name);
  },

  render: function() {
    return (
      <div>
        <div className="bombastic" onClick={this.handleClick}>
          <h1>{this.props.name}</h1>
          <h2>{this.props.subtext}</h2>
          <hr />
        </div>
      </div>
    );
  }
});

module.exports = Resource;