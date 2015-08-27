var 
  React = require('react'),
  $ = require('jquery');

var Resource = React.createClass({
  handleClick: function() {
    var savedResource = [];
    savedResource.push(this.props.id);

    $.ajax({
      traditional: true,
      url: 'http://localhost:3000/users/' + User.id,
      dataType: 'JSON',
      type: 'PUT',
      data: {saved_resources: savedResource}
    })
  },

  checkLogin: function() {
    if (User) {
      return (
        <a href='#/map-search' className="subscribe" onClick={this.handleClick}>Subscribe</a>
      );
    }
  },

  render: function() {
    return (
      <div>
        <div className="bombastic" onClick={this.handleClick}>
          <h1 className="main-title">{this.props.name}</h1>
          <h3 className="subtext">{this.props.subtext}</h3>
          <h3 className="info-label"><span className="text-light">Site: </span><a className="website" href={this.props.website}>{this.props.website}</a></h3>
          <h3 className="info-label"><span className="text-light">Services: </span>{this.props.services.join(' | ')}</h3>
          <h3 className="info-label"><span className="text-light">Address: </span>{this.props.address}</h3>
          <h3 className="info-label"><span className="text-light">Phone: </span>{this.props.phone}</h3>
          <p className="summary">{this.props.summary}</p>
          {this.checkLogin()}
          <hr />
        </div>
      </div>
    );
  }
});

module.exports = Resource;