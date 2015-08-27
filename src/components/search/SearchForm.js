var React = require('react');

var SearchForm = React.createClass({
  services: [
    'After School',
    'Child Safety',
    'Child Welfare',
    'Creative Education',
    'Early Childhood Education',
    'Foster / Adoption',
    'Health',
    'Home Visitation',
    'Medical',
    'Parent Aide',
    'Parenting Classes',
    'Pregnancy / Parenthood',
    'Special Needs',
    'Support Services'
    ],

  render: function() {
    var options = [];

    this.services.forEach(function(service) {
      options.push(<option key={service} value={service}>{service}</option>)
    });

    return (
      <form action="http://localhost:8000/map-search">
        <select id="service">
          <option value='' className="first-option" defaultValue>Select a Service...</option>
          {options}
        </select>
        <input type="text" placeholder="Zip Code" id="zipcode" className="input-field"/>
        <button type="button" className="search-btn"><a href="/#/map-search"><i className="fa fa-search"></i></a></button>
      </form>
    );
  }
});

module.exports = SearchForm;