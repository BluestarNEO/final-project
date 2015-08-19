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
      <form>
        <select>
          <option value='' defaultValue>Select a Service...</option>
          {options}
        </select>
        <input type="text" placeholder="Zip Code" className="input-field"/>
        <button type="submit" formAction="/#/map-search"><i className="fa fa-search"></i></button>
      </form>
    );
  }
});

module.exports = SearchForm;