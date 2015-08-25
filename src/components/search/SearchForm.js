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
      <form action="/#/map-search">
        <select id="service">
          <option value='' defaultValue>Select a Service...</option>
          {options}
        </select>
        <input type="text" placeholder="Zip Code" id="zipcode" className="input-field"/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
  }
});

module.exports = SearchForm;