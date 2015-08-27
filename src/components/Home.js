var 
  React      = require('react'),
  SearchForm = require('./search/SearchForm');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <section id="hero-section">
          <div>
            <div id="search-form">
              <h1>Local Services for Phoenix Families</h1>
              <p className="search-form-subtext">Select any number of services and search your zipcode</p>           
              <SearchForm onSubmit={this.handleSubmit} />
              <p className="search-form-subtext">Or choose to select <a href="#/map-search">all services</a></p>
            </div>         
          </div>
        </section>
        <section id="info-section">
          <div>
            <div>
              <h1>Find the Services You Need in the Area that You Live</h1>
            </div>
            <div id="primary-info">
              <div id="search-info">
                <div className="info search-icon">
                  <i className="fa fa-search-plus"></i>
                </div>
                <div>
                  <h4><strong>Search for Local Family Services</strong></h4>
                  <p>Filter the services that you need and locate those results 
                  that are closest to you!</p>
                </div>
              </div>
              <div id="profile-info">
                <div className="info profile-icon">
                  <i className="fa fa-user-plus"></i>
                </div>
                <div>
                  <h4><strong>Sign Up and Build a Profile</strong></h4>
                  <p>Sign up and create a simple profile. Then save local resources 
                  close to you for easy access info!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
  }
});

module.exports = Home;