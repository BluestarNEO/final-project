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
              <SearchForm onSubmit={this.handleSubmit} />
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
                  <h2><strong>Search for Local Family Services</strong></h2>
                  <p>Filter the services that you need and locate those results 
                  that are closest to you!</p>
                </div>
              </div>
              <div id="profile-info">
                <div className="info profile-icon">
                  <i className="fa fa-user-plus"></i>
                </div>
                <div>
                  <h2><strong>Sign Up and Build a Profile</strong></h2>
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
    console.log('test');
  }

});

module.exports = Home;