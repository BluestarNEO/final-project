var React = require('react');

var SearchForm = React.createClass({
  getInitialState: function() {
    return {
      option: null,
      zipcode: null
    }
  },

  services: [
    'After School',
    'Child Safety',
    'Child Welfare',
    'Creative Education',
    'Early Childhood Education',
    'Foster | Adoption',
    'Health',
    'Home Visitation',
    'Medical',
    'Parent Aide',
    'Parenting Classes',
    'Pregnancy | Parenthood',
    'Special Needs',
    'Support Services'
  ],

  handleOption: function() {
    this.setState({option: event.target.value});
  },

  handleZip: function() {
    this.setState({zipcode: event.target.value});
  },

  render: function() {
    var options = [];
    if(this.state.option === null && this.state.zipcode === null) {
      console.log('it was null')
    } else {
      var paramUrl = '/#/map-search/' + this.state.option + '/' + this.state.zipcode;
    }

    console.log(paramUrl);

    this.services.forEach(function(service) {
      options.push(<option key={service} value={service}>{service}</option>)
    });

    return (
      <form>
        <select id="service" onChange={this.handleOption}>
          <option value='' className="first-option" defaultValue>Select a Service...</option>
          {options}
        </select>
        <input type="text" placeholder="Zip Code" id="zipcode" onChange={this.handleZip} className="input-field"/>
        <button type="button" className="search-btn"><a href={paramUrl}><i className="fa fa-search"></i></a></button>
      </form>
    );
  }
});

module.exports = SearchForm;