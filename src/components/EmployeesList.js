import React from 'react';

class EmployeesList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inputVal: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {

    const input = e.target.value
    this.setState({ inputVal:input.toLowerCase() });
  }

  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" onChange={this.handleInputChange} className="filter-input" data-testid="filter-input" />
        </div>
        <ul className="employees-list">
          {
            employees.filter(employee => employee["name"].toLowerCase().includes(this.state.inputVal)).map(filteredEmployee => (
              <li key={filteredEmployee.name} data-testid="employee">
                {filteredEmployee.name}
              </li>
            ))

          }
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
