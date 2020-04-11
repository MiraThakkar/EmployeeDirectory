import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";

class ResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.users()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <EmployeeTable 
          results = {this.state.results} >
        </EmployeeTable>
      </div>
    
    );
  }
}

export default ResultContainer;