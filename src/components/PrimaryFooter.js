var React = require('react');

var PrimaryFooter = React.createClass({
  render: function() {
    return (
      <footer id="primary-footer"> 
        <div>
          <div>
            <h2><i className="fa fa-copyright"></i> Phoenix Family Resource 2015</h2>
          </div>
          <div>
            <nav id="nav-footer">
              <a href="#"><i className="fa fa-facebook-square"></i></a>
              <a href="#"><i className="fa fa-twitter-square"></i></a>
              <a href="#"><i className="fa fa-google-plus-square"></i></a>
              <a href="#"><i className="fa fa-reddit-square"></i></a>  
            </nav>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = PrimaryFooter;